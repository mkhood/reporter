import React from 'react';
import PropTypes from 'prop-types'
import SVGContainer from './SVGContainer';

const PassedIcon = () => (
    <SVGContainer>
    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' align='middle' viewBox='0 0 20 20'>
      <path fill='none' fillRule='evenodd' stroke='#fff' strokeLinejoin='round' strokeWidth='1.242' d='M17.413 15.3c-.35.49-.742.955-1.174 1.392-.47.476-.815.762-1.107.882l-.134.055-.144-.01c-.567-.037-1.176-.182-1.826-.432a11.743 11.743 0 0 1-2.003-1.023 21.172 21.172 0 0 1-2.178-1.583 31.974 31.974 0 0 1-2.328-2.125 35.637 35.637 0 0 1-2.1-2.314 21.527 21.527 0 0 1-1.59-2.169 11.44 11.44 0 0 1-1.033-2.007c-.251-.655-.391-1.268-.416-1.84l-.006-.12.04-.114c.11-.309.393-.66.876-1.138.441-.435.909-.83 1.42-1.195.065-.043.135-.08.208-.112a.854.854 0 0 1 .534-.045l.221.047.14.179c.09.118.242.339.463.676.21.321.434.659.672 1.013.24.359.468.7.68 1.026.217.33.359.552.431.672l.089.148v.172a1.465 1.465 0 0 1-.166.629c-.052.103-.153.285-.31.557-.148.26-.328.578-.541.96l-.14.244.163.234c.13.191.38.507.74.938.361.431.877.988 1.542 1.664.666.666 1.216 1.177 1.648 1.529.443.36.76.61.95.748l.231.168.237-.132a30.73 30.73 0 0 1 1.477-.83 1.266 1.266 0 0 1 .68-.21h.188l1.81 1.207c.367.244.71.471 1.032.682.328.215.549.363.667.445l.265.186v.323c0 .053-.005.11-.013.177a.899.899 0 0 1-.195.446z' />
    </svg>

  </SVGContainer>
);

export default PassedIcon;

PassedIcon.propTypes = {
    color: PropTypes.string,
    height: PropTypes.number,
    style: PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
      ])
    ),
    width: PropTypes.number
  }
  
  PassedIcon.defaultProps = {
    color: '#fff',
    height: 20,
    style: {},
    width: 20
  }