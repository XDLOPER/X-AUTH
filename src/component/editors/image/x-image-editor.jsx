import React,{useState,useEffect,useRef,DependencyList,createContext, useContext} from 'react'
import ReactCrop, {
    centerCrop,
    makeAspectCrop,
    Crop,
    PixelCrop,
    convertToPixelCrop,
  } from 'react-image-crop'

  const TO_RADIANS = Math.PI / 180

async function canvasPreview(
    image,
    canvas,
    crop,
    scale = 1,
    rotate = 0,
  ) {
    const ctx = canvas.getContext('2d')
  
    if (!ctx) {
      throw new Error('No 2d context')
    }
  
    const scaleX = image.naturalWidth / image.width
    const scaleY = image.naturalHeight / image.height
    // devicePixelRatio slightly increases sharpness on retina devices
    // at the expense of slightly slower render times and needing to
    // size the image back down if you want to download/upload and be
    // true to the images natural size.
    const pixelRatio = window.devicePixelRatio
    // const pixelRatio = 1
  
    canvas.width = Math.floor(crop.width * scaleX * pixelRatio)
    canvas.height = Math.floor(crop.height * scaleY * pixelRatio)
  
    ctx.scale(pixelRatio, pixelRatio)
    ctx.imageSmoothingQuality = 'high'
  
    const cropX = crop.x * scaleX
    const cropY = crop.y * scaleY
  
    const rotateRads = rotate * TO_RADIANS
    const centerX = image.naturalWidth / 2
    const centerY = image.naturalHeight / 2
  
    ctx.save()
  
    // 5) Move the crop origin to the canvas origin (0,0)
    ctx.translate(-cropX, -cropY)
    // 4) Move the origin to the center of the original position
    ctx.translate(centerX, centerY)
    // 3) Rotate around the origin
    ctx.rotate(rotateRads)
    // 2) Scale the image
    ctx.scale(scale, scale)
    // 1) Move the center of the image to the origin (0,0)
    ctx.translate(-centerX, -centerY)
    ctx.drawImage(
      image,
      0,
      0,
      image.naturalWidth,
      image.naturalHeight,
      0,
      0,
      image.naturalWidth,
      image.naturalHeight,
    )
  
    ctx.restore()
}

function useDebounceEffect(
    fn,
    waitTime,
    deps,
  ) {
    useEffect(() => {
      const t = setTimeout(() => {
        fn.apply(undefined, deps)
      }, waitTime)
  
      return () => {
        clearTimeout(t)
      }
    }, deps)
}

function centerAspectCrop(mediaWidth,mediaHeight,aspect) {
    return centerCrop(
      makeAspectCrop(
        {
          unit: '%',
          width: 90,
        },
        aspect,
        mediaWidth,
        mediaHeight,
      ),
      mediaWidth,
      mediaHeight,
    )
}

function XImageEditor({path}) {
    const [imgSrc, setImgSrc] = useState(path)
    const previewCanvasRef = useRef(null)
    const imgRef = useRef(null)
    
    const hiddenAnchorRef = useRef(null)
    const [blobLink,setBlobLink] = useState()
    
    const [crop, setCrop] = useState()
    const [completedCrop, setCompletedCrop] = useState()

    const [scale, setScale] = useState(1)
    const [rotate, setRotate] = useState(0)
    const [aspect, setAspect] = useState(1 / 1)

    function onImageLoad(e) {
        if (aspect) {
            const { width, height } = e.currentTarget
            
            setCrop(centerAspectCrop(width, height, aspect))
        }

    }

    async function onBlobLinkHandle() {
        const image = imgRef.current
        const previewCanvas = previewCanvasRef.current
        if (!image || !previewCanvas || !completedCrop) {
            throw new Error('Crop canvas does not exist')
        }

        // This will size relative to the uploaded image
        // size. If you want to size according to what they
        // are looking at on screen, remove scaleX + scaleY
        const scaleX = image.naturalWidth / image.width
        const scaleY = image.naturalHeight / image.height

        const offscreen = new OffscreenCanvas(
            completedCrop.width * scaleX,
            completedCrop.height * scaleY,
        )
        const ctx = offscreen.getContext('2d')
        if (!ctx) {
            throw new Error('No 2d context')
        }

        ctx.drawImage(
            previewCanvas,
            0,
            0,
            previewCanvas.width,
            previewCanvas.height,
            0,
            0,
            offscreen.width,
            offscreen.height,
        )

        // You might want { type: "image/jpeg", quality: <0 to 1> } to
        // reduce image size
        const blob = await offscreen.convertToBlob({
            type: 'image/png',
        })

         return URL.createObjectURL(blob) // => buradan blob linkini alıyoruz


    }

    useDebounceEffect(
        async () => {
        if (
            completedCrop?.width &&
            completedCrop?.height &&
            imgRef.current &&
            previewCanvasRef.current
        ) {
            // We use canvasPreview as it's much faster than imgPreview.
            canvasPreview(
                imgRef.current,
                previewCanvasRef.current,
                completedCrop,
                scale,
                rotate,
            )
        }
        },
        10,
        [completedCrop, scale, rotate],
    )

  return (
    <div className="App">

      {!!imgSrc && (
        <ReactCrop
          crop={crop}
          onChange={(_, percentCrop) => setCrop(percentCrop)}
          onComplete={(c) => {setCompletedCrop(c);}}
          aspect={aspect}
          // minWidth={400}
          minHeight={100}
          circularCrop
        >
          <img
            ref={imgRef}
            src={imgSrc}
            style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
            onLoad={onImageLoad}
          />
        </ReactCrop>
      )}
      {!!completedCrop && (
        <>
          <div>
            <canvas
              ref={previewCanvasRef}
              style={{
                border: '1px solid black',
                objectFit: 'contain',
                width: completedCrop.width,
                height: completedCrop.height,
              }}
            />
          </div>
        </>
      )}
      <div className="Crop-Controls">
        <div>
          <label htmlFor="scale-input">Scale: </label>
          <input
            id="scale-input"
            type="number"
            step="0.1"
            value={scale}
            disabled={!imgSrc}
            onChange={(e) => setScale(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="rotate-input">Rotate: </label>
          <input
            id="rotate-input"
            type="number"
            value={rotate}
            disabled={!imgSrc}
            onChange={(e) =>
              setRotate(Math.min(180, Math.max(-180, Number(e.target.value))))
            }
          />
        </div>

      </div>
    </div>
  )
}

export default XImageEditor