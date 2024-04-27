import React,{useState,useEffect,useRef,createContext, useContext} from 'react'
import { Modal } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import AvatarEditor from 'react-avatar-editor'
import { Editor } from 'tiny-image-editor';

import XButton from '../../../buttons/x-button'
import Image from '../../../image';
import IconGenerate from '../../../iconGenerate';
import XSpinner from '../../../loading/x-spinner';
import XImageEditor from '../../../editors/image/x-image-editor';

import { setModalAppend,setModalDestroy } from '../../../../store/app/modals/actions'

import { basicIDGenerate } from '../../../../utils/helpers/ID/basicIDGenerate'


const PropsContext = createContext()

const supportFileExtension = {
  image:['jpeg','jpg','png'],
  video:['mp4'], // => video kısmında sorun yaşanıyo hem render sırasında çok kez render ediyo hemde yanlış türde oluyor hemde edit kısmında select işlemi olmuyor ilerde yapılacak. (çözüldü)
  audio:['']
}

const FileModal = (props) => {
    const {modalData} = props

    const [page,setPage] = useState(0) 
    const [files,setFiles] = useState([]) 
    const [editedFiles,setEditedFiles] = useState([]) //=> ileride callbackFunc ile modal içersindeki verileri bulunduğu yerden alabilmek için tasarlanır bu şekilde
    const translation = useTranslation()
    const maxPage = 1
    
    const changeBodyNext = () => {
      if(files.length > 0){
        setPage(page + 1)
      }   
    }

    const changeBodyBack = () => {
        if(page === 0){
            setPage(0)
        }else {
            setPage(page - 1)
        }     
    }

    const changeBodyComplate = () => {
      alert('veriler databasee gidicek')
      setModalDestroy(modalData.ID)
    }

    useEffect(() => {
      if(!modalData.data.extra.extensions || modalData.data.extra.extensions?.length <= 0){
        throw new Error('Some properties were not found.')
      }
    }, [modalData.data.extra.extensions , modalData.data.extra.role]);
    
    return (
      <>
        <PropsContext.Provider value={{
          ...modalData.data.extra,
          page,
          setPage,
          files,
          setFiles,
          editedFiles,
          setEditedFiles
          }}>

            <Modal.Body>
                <PageRouter page={page}></PageRouter>
            </Modal.Body>
            <Modal.Footer>
                {
                    page !== 0 && (
                      <>
                        <XButton to onClick={changeBodyBack}>{translation.t('app.button.back')}</XButton>
                      </>
                    )
                }
                {
                    (page === maxPage) || !modalData.data.extra.editor ? <XButton to onClick={changeBodyComplate}>{translation.t('app.button.complete')}</XButton> : <XButton to onClick={changeBodyNext}>{translation.t('app.button.next')}</XButton>
                }
            </Modal.Footer>

        </PropsContext.Provider>
        </>
    )
}

const PageRouter = ({page}) => {
  const {extensions, files:contextFiles } = useContext(PropsContext);
  const translation = useTranslation()
  console.log(extensions)
    switch (page) {
        case 0:
            return <>
              <FilePage />
              <span className='supportExtensionsText'>({extensions?.join(',')}){' '}{translation.t('app.modal.fileModal.extensionSupport')}</span>
            </>;
        case 1:
            return <EditPage/>
        default:
          return <FilePage />
    }
  
}

const FilePage = () => {
    const { role,cover,extensions,files:contextFiles,setFiles,...rest } = useContext(PropsContext);
    const [loading, setLoading] = useState(0);
    const [progress, setProgress] = useState(0);
    const translation = useTranslation()
    const maxFile = 4

    const handleFile = () => {
      let fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.multiple = role && true 

      fileInput.click();
      
        const handleChangeFile = (e) => {
          const file = e.target;
          let files =  file.files

          files = Array.from(files).filter(item => {
            const fileURL = URL.createObjectURL(item)?.toString()
            const fileType = item.type.split('/')[0]?.toString()
            const fileExtension = item.type.split('/')[1]?.toString()

            if(Object.values(supportFileExtension)?.flat()?.includes(fileExtension)){

              item.ID = basicIDGenerate();
              item.path = fileURL;
              item.typeShort = fileType;
              item.extension = fileExtension;

              return item
            }
          })
          
          console.log(files)

          if (!files || files.length === 0) {
            setModalAppend({
              name:'errorModal',
              data:{
                title:'Hata',
                body:translation.t('messages.errors.notFindFile')
              }
            })

            return;
          }

          if(contextFiles.length +  files.length > maxFile){

            setModalAppend({
              name:'errorModal',
              data:{
                title:'Hata',
                body:translation.t('messages.errors.maxFile')
              }
            })
            
            return;
          }


          if(!role){
            const selectedFile = files[0];
        
              if (extensions?.includes(selectedFile.extension)) {  
                setLoading(true);
                
                const reader = new FileReader();
                reader.readAsDataURL(selectedFile);
                const fileSize = selectedFile.size;
      
                reader.onloadstart = function () {
                  setProgress(0); 
                };
                reader.onprogress = function (event) {
                  const progress = (event.loaded / fileSize) * 100;
                  setProgress(progress);
                };
                reader.onloadend = function () {
                  setLoading(false); 
  
                  setFiles([selectedFile]);
      
                };
      
              } else {
                console.error('File extension mismatch:', selectedFile.extension);
                setLoading(false);
              }

          }else if(role){

            files.filter((item,index) => {

              if(!extensions?.includes(item.extension) ){
                console.error('File type mismatch => ' + item.name) 
              }else{
                setLoading(true)

                const reader = new FileReader();
                reader.readAsDataURL(item);
                const filesSize = item.size;
      
                reader.onloadstart = function () {
                  setProgress(0); 
                };
                reader.onprogress = function (event) {
                  const progress = (event.loaded / filesSize) * 100;
                  setProgress(progress);
                };
                reader.onloadend = function () {
                  setFiles(prevState => [...prevState, item])

                  if (index === files.length - 1) {
                    setLoading(false);
                  } 
                };

              }

            })
            
          }

        };
      
        fileInput.addEventListener('change', handleChangeFile);
    };

    const handleContextFileDelete = (ID) =>{
      const deleteFile = contextFiles.filter(item => item.ID !== ID)
      setFiles(deleteFile)
    }

    return <>

        <XButton to className="XFile" onClick={handleFile} {...rest}>
            {
            loading ? 
                <XSpinner animation="border" variant="primary"></XSpinner>
            :
            contextFiles.length > 0 ? 
                <div className='fileContent'>
                  {
                      !role ?
                        <div className='fileGenerateWrapper' style={{position:'relative'}}>
                          <FileGenerate extension={contextFiles[0].extension} path={contextFiles[0].path} />
                          <XButton className={'close'} onClick={(e)=>{e.preventDefault(); e.stopPropagation(); handleContextFileDelete(contextFiles[0].ID)}}><IconGenerate icon={'X'}></IconGenerate></XButton>
                        </div>   
                      :
                      role && contextFiles.map((item,index) =>
                        <div className='fileGenerateWrapper' style={{position:'relative'}}>
                          <FileGenerate key={index} extension={item.extension} path={item.path} />
                          <XButton className={'close'} onClick={(e)=>{e.preventDefault(); e.stopPropagation(); handleContextFileDelete(item.ID)}}><IconGenerate icon={'X'}></IconGenerate></XButton>
                        </div>
                      ) 
                  }
                </div>
            : <IconGenerate icon={'PatchPlus'}/>
            }
            {
              contextFiles.length !== 0 && <XButton className={'close'} onClick={(e)=>{e.preventDefault(); e.stopPropagation(); setFiles([]) }}><IconGenerate icon={'X'}></IconGenerate></XButton> // => direk ortaya hepsini silen buton implemente yada edilmeyebilir edilebilir
            }
        </XButton>
    </>
}

const FileGenerate = ({ extension, path, controls = true, onSelectFile }) => {

  if(supportFileExtension.image?.includes(extension)){
    return <Image onClick={onSelectFile} src={path} />
  }
  else if(supportFileExtension.video?.includes(extension)){
    return (
      <div onClick={onSelectFile} style={{ position: 'relative' }}>
        <video controls={controls} style={{ position: '', top: "0", left: "0", width: "100%", height: "100%" }}>
          <source src={path} />
        </video>
      </div>
    )
  }
  else{
    console.error('File any not matching extension.')
    return <div>File any not matching extension.</div>
  }

};

const EditPage = () => {
  const { files:contextFile,setFiles,...rest } = useContext(PropsContext);
  const [selectFile,setSelectFile] = useState(contextFile[0])
  const contextFileLenght = contextFile.length

  useEffect(() => {
    console.log(selectFile)
  }, [selectFile]);
  
  return <>
    <div className='wrapper'>
      <div className="editor">
        <EditGenerate extension={selectFile.extension} path={selectFile.path} />
      </div>

      <div className="photos">
        {
          contextFileLenght > 1 && contextFile.map((item,index) =>{
            return (
              <div className="photo">
                <FileGenerate key={index} type={item.typeShort} extension={item.extension} path={item.path} controls={false} onSelectFile={() => {setSelectFile(item)}}/>
              </div>
            )
          })
        }
      </div>
    </div>
  </>
}

const EditGenerate = ({ path,extension, controls = true, onSelectFile }) => {

  if(supportFileExtension.image?.includes(extension)){
    return (
      <div style={{height:"100%"}}>
        <XImageEditor path={path}></XImageEditor>
      </div>
    )
  }

  else if(supportFileExtension.video?.includes(extension)){
    return (
      <div onClick={onSelectFile} style={{ position: 'relative' }}>
        <video controls={controls} style={{ position: '', top: "0", left: "0", width: "100%", height: "100%" }}>
          <source src={path} />
        </video>
      </div>
    )
  }
  else{
    console.error('File any not matching extension.')
    return <div>File any not matching extension.</div>
  }

};




export default FileModal