import React, { useEffect , forwardRef} from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import IconGenerate from '../iconGenerate';

const XButton = forwardRef (({type = '', ...props },ref) => {
  const {children,disabled, off, to, as, icon, variant, style, className, ...rest } = props;

  type = as ? 'as' : variant ? 'variant' : type

  const xButtonVariantClass = classNames(`btn btn-${variant} xButton variant`, className, {
    'defaultButton': type === '',
    'arrowButton': type === 'arrow',
    'centerButton': type === 'center',
  });

  const xButtonDefaultClass = classNames('btn btn-light xButton ', className, {
    'defaultButton': type === '',
    'arrowButton': type === 'arrow',
    'centerButton': type === 'center',
  });

  useEffect(() => {
     if (variant && as) {
          throw new Error("Don't use together variant and as");
     }

  }, [as, variant]);


  switch (type) {
    case 'as':
      return <>{as}</>

    case 'variant':
      return (
          (
            <Link to={!!to ? to : null} style={{opacity:off === true ? 0 : 1,cursor:(disabled === true || off) ? "default" : 'pointer'}}>
              <button
                ref={ref}
                disabled={(disabled === true) ? true : false}
                className={xButtonVariantClass}
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor:(disabled === true) ? "default" : 'pointer',
                  ...style,
                }}
                {...rest}
              >
                {children} {icon && <IconGenerate icon={icon.toString()} />}
              </button>
            </Link> 
          )
      );

    case 'arrow':
    case 'center':
    default:
      return (
          (
            <Link to={!!to ? to : null} style={{opacity:off === true ? 0 : 1,cursor:(disabled === true || off) ? "default" : 'pointer'}}> {/* burada bir sorun var düzeltilmeli componete to yazmadan yönlendirme yapıyo*/}
              <button
                ref={ref}
                disabled={(disabled === true) ? true : false}
                className={xButtonDefaultClass}
                style={{
                  ...style,
                }}
                {...rest}
              >
                {children} {icon ? <IconGenerate icon={icon.toString()} /> : (type === 'arrow' ? <IconGenerate icon={'BiRightArrow'} /> : null)}
              </button>
            </Link>
          )
      );
  }
});

export default XButton;
