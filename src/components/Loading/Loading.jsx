import React from 'react'

import './Loading.scss';

export const Loading = () => {
  return (
    <div className='Loading'>
        <div className='LoadingContent'>
          <svg className='loadingSvg' width="456" height="156" viewBox="0 0 456 156" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M193.41 72.195H199.993V70.602H200.047C200.128 70.531 200.128 70.458 200.128 70.458C200.128 69.702 199.633 69.072 199.094 69.072H199.436V68.317H199.706C199.913 68.317 200.129 67.903 200.129 67.48C200.129 67.003 199.913 66.59 199.706 66.59H194.651C194.444 66.59 194.247 67.003 194.247 67.48C194.247 67.903 194.444 68.317 194.651 68.317H194.939V69.072H153.322V68.317H153.61C153.817 68.317 153.952 67.903 153.952 67.48C153.952 67.003 153.817 66.59 153.61 66.59H148.484C148.286 66.59 148.133 67.003 148.133 67.48C148.133 67.903 148.286 68.317 148.484 68.317H148.898V69.072H148.484C147.926 69.072 147.521 69.558 147.449 70.26V70.602H147.521C147.584 71.502 147.998 72.195 148.484 72.195H155.13V70.602H155.4V74.344L159.699 76.205C159.214 75.782 158.737 75.314 158.737 75.314L159.699 76.205C161.561 78.076 160.608 81.881 160.608 85.209C159.699 96.969 159.214 103.543 161.085 115.308L161.913 115.452V117.602C161.913 118.151 164.062 118.573 166.689 118.573C169.387 118.573 171.537 118.151 171.537 117.602V115.389C171.672 115.389 171.825 115.308 171.96 115.308C173.822 108.733 173.336 99.739 173.336 92.256C172.373 80.495 170.017 75.782 177.563 74.344V70.602H178.732V72.195H185.307V70.602H186.485V72.195H191.89V70.602H193.411L193.41 72.195Z" fill="#010101"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M447.388 43.944H333.935V42.009C333.935 40.759 333.17 39.661 332.065 39.238V34.877C332.065 34.256 331.858 33.978 331.229 33.771V33.151C331.229 32.179 330.482 31.352 329.429 31.352C328.395 31.352 327.64 32.179 327.64 33.151V33.564H326.111C326.111 33.151 325.833 32.88 325.427 32.88C325.283 32.8804 325.144 32.9281 325.03 33.0158C324.916 33.1035 324.834 33.2262 324.797 33.365C324.59 32.106 323.691 29.211 321.272 29.211H312.745C309.499 29.211 308.455 31.009 308.455 33.833H307.628C307.628 33.833 307.691 33.284 307.691 32.395V29.274C307.66 27.9953 307.13 26.7794 306.214 25.8867C305.298 24.9941 304.069 24.4956 302.79 24.498H298.769V24.085C298.706 22.979 298.077 22.628 298.077 22.628C293.309 23.383 288.525 26.567 288.525 26.567L289.497 28.725H290.395V28.788L291.574 32.394L290.108 33.832H283.47V32.313L281.122 30.793V29.893H273.432V30.73H271.624V29.893H263.943V30.73H262.144V29.893H254.462V30.73H252.663V29.893H244.981V30.73H244.352V26.781H263.248L267.413 24.911H270.309C270.516 25.19 270.732 25.396 270.939 25.396H273.295C274.258 25.396 275.094 21.862 275.094 17.5C275.094 13.146 274.258 9.54002 273.295 9.54002H270.939C270.732 9.54002 270.516 9.74702 270.309 10.025H266.918V2.47803L265.956 0.410034H260.424V2.62202L259.516 0.410034H241.87L240.764 2.62202V2.69403C240.764 1.44403 239.999 0.410034 239.028 0.410034C237.985 0.410034 237.239 1.44403 237.239 2.69403V4.27702H226.5V8.16103H225.87V10.023H224.899C224.629 8.91703 224.288 8.22403 223.874 8.22403H221.581C221.239 8.22403 220.897 8.77303 220.682 9.61903V9.53802H219.162C218.604 7.81002 217.993 6.77702 217.22 6.77702H213.496C211.895 6.77702 210.581 11.616 210.581 17.641C210.581 23.667 211.894 28.579 213.496 28.579H217.22C217.786 28.579 218.335 27.886 218.821 26.779H220.682V25.737C220.898 26.564 221.24 27.05 221.581 27.05H223.874C224.153 27.05 224.423 26.636 224.692 26.016H225.87V26.78H226.5V29.892H225.952V30.729H223.523V30.037H216.471V30.729H213.701V33.912L203.933 34.946H172.228C171.823 33.219 169.88 31.907 167.515 31.907C165.096 31.907 163.162 33.22 162.748 34.946H144.13L142.871 35.576H129.371V31.07C130.9 25.673 129.371 19.854 129.371 19.854C126.205 19.368 123.839 19.854 123.839 19.854C120.385 24.422 121.069 31.07 121.069 31.07V35.576H121.284C121.284 35.576 119.207 39.588 121.069 44.499V48.366C121.069 48.366 120.934 48.789 120.79 49.481H112.012C111.517 45.397 110.141 42.493 108.468 42.493H59.26C58.154 42.493 57.182 43.113 56.418 44.157C55.653 43.113 54.682 42.493 53.657 42.493H4.56603C2.56103 42.493 0.905029 47.061 0.905029 52.665C0.905029 58.277 2.56003 62.847 4.56603 62.847H53.657C54.682 62.847 55.654 62.217 56.418 61.174C57.183 62.217 58.154 62.847 59.26 62.847H108.468C109.997 62.847 111.31 60.347 111.868 56.822H120.655C120.79 57.306 120.934 57.864 121.069 58.413H125.782C126.052 62.775 127.158 66.517 129.937 66.517H214.042V65.959C215.499 66.166 217.712 66.651 219.439 68.027L218.683 75.169L217.63 76L217.424 76.971L218.467 77.313C218.125 79.255 217.846 80.569 217.846 80.569C217.846 80.569 212.44 112.818 192.644 147.158C192.644 147.158 192.095 148.057 193.48 148.885C194.865 149.712 202.483 154.561 204.075 155.325C205.73 156.152 206.764 154.766 206.764 154.766C226.569 120.364 231.975 88.173 231.975 88.173L233.836 84.373L232.865 84.022L233.269 82.222L235.365 82.924V82.853C235.428 82.924 235.428 82.924 235.5 82.924L235.365 83.41L237.713 83.751C238.478 83.959 239.161 84.022 239.449 84.093C239.862 86.864 240.689 92.058 241.167 92.543C241.796 93.299 242.075 92.256 242.075 92.256L241.589 84.237H247.399C248.164 84.992 248.928 86.107 249.477 87.624C250.934 91.842 252.876 97.311 254.038 99.945C255.297 102.643 257.509 103.75 264.012 103.75H274.68C278.349 103.75 277.935 100.845 282.091 100.565C283.602 100.494 284.708 100.638 285.482 100.908C290.258 111.781 295.519 125.282 298.55 132.684C302.579 130.336 305.835 129.149 309.838 126.11C313.444 123.753 317.033 121.477 320.712 119.048V116.701C315.522 110.261 295.168 81.124 302.498 74.127C304.927 73.228 307.148 72.885 308.452 72.814C310.944 72.598 311.844 70.808 311.996 70.385H321.476C321.889 70.385 322.294 70.385 322.717 70.322H323.401V70.178C324.102 69.972 324.506 69.558 324.795 68.865V69.288H327.638C327.638 69.899 328.393 70.321 329.427 70.321C330.48 70.321 331.227 69.899 331.227 69.288H336.425C338.638 69.288 338.431 67.273 338.431 67.273V61.6H335.184V60.566H383.212C387.441 60.566 388.402 62.985 391.524 64.847C394.636 66.718 434.786 95.791 440.192 99.326C445.651 102.851 451.884 104.579 453.621 100.783C455.348 97.041 449.807 76.97 454.726 53.424C456.185 43.818 453.208 43.944 447.388 43.944ZM131.241 44.223H130.072V43.881H131.241V44.223ZM282.704 96.412L275.302 100.98H262.144C258.141 100.98 256.613 100.153 255.299 96.412C253.986 92.742 253.014 89.972 251.908 85.965C251.722 85.4093 251.675 84.816 251.773 84.238H265.613C274.194 91.573 264.57 99.11 266.441 99.181C268.303 99.253 270.596 97.454 271.91 94.684C273.151 91.914 272.674 86.657 272.674 85.767C272.674 84.93 273.43 84.238 273.43 84.238H274.816C275.921 84.723 276.965 85.281 277.865 86.108C279.25 88.038 280.986 91.366 282.856 95.314L282.704 96.412ZM295.026 27.889C294.414 27.889 293.92 27.404 293.92 26.711C293.918 26.5648 293.945 26.4197 294 26.2841C294.055 26.1485 294.136 26.0252 294.239 25.9214C294.342 25.8175 294.465 25.7353 294.6 25.6794C294.735 25.6236 294.88 25.5952 295.026 25.596C295.656 25.596 296.204 26.081 296.204 26.711C296.204 27.403 295.656 27.889 295.026 27.889ZM435.696 77.24C435.696 77.87 435.696 79.183 435.489 79.741C435.201 79.669 434.652 79.453 433.618 78.769C426.549 73.714 412.158 63.748 412.014 63.605H411.951C408.965 61.671 408.426 60.277 408.56 59.872C408.695 59.387 409.738 58.838 410.979 58.838H432.017C432.853 58.838 434.724 58.838 435.201 59.243C435.354 59.387 435.696 60.008 435.696 62.292V77.24Z" fill="#010101"/>
          </svg>
        </div>
    </div>
  )
}