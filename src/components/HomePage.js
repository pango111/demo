// src/components/HomePage.js - 集成优化About Section
import React, { useEffect, useState } from 'react';
import { BarChart3, FolderOpen, Workflow, ArrowRight, Award, Clock, Shield, Brain, ChevronUp, ChevronDown, Target, Users, Database, Zap } from 'lucide-react'; 

const HomePage = ({ setCurrentPage }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showDetails, setShowDetails] = useState(false); // 新增：控制技术细节展开

  // Hero Visual Demo Component - Using Original SVG with Green Theme
  const HeroVisualDemo = () => {
  return (
    <div className="relative">
      <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-8 shadow-2xl border border-green-100 overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute top-4 right-4 w-6 h-6 text-green-400">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>

        {/* 内容区 */}
        <div className="relative z-10 flex flex-col items-center">
          {/* 第二张 SVG 图 */}
          <svg className="w-auto max-w-[28rem] h-52 mb-4" aria-hidden="true" width="748" height="678" viewBox="0 0 748 678" fill="none" xmlns="http://www.w3.org/2000/svg">
            {<svg class="w-auto max-w-[16rem] h-40 text-gray-800 dark:text-white" aria-hidden="true" width="748" height="678" viewBox="0 0 748 678" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M165 279V464" stroke="#d6e2fb" stroke-width="2" stroke-linecap="round"/>
<path d="M145 279L75 464" stroke="#d6e2fb" stroke-width="2" stroke-linecap="round"/>
<path d="M185 279L255 464" stroke="#d6e2fb" stroke-width="2" stroke-linecap="round"/>
<path d="M0 12.2174C0 5.46991 3.70484 0 8.275 0H322.725C327.295 0 331 5.46991 331 12.2174V268.783C331 275.53 327.295 281 322.725 281H8.27499C3.70484 281 0 275.53 0 268.783V12.2174Z" fill="#d6e2fb"/>
<path d="M0 12.2174C0 5.46991 3.70484 0 8.275 0H322.725C327.295 0 331 5.46991 331 12.2174V268.783C331 275.53 327.295 281 322.725 281H8.27499C3.70484 281 0 275.53 0 268.783V12.2174Z" fill="url(#paint0_linear_275_1057)" fill-opacity="0.3"/>
<rect x="83" y="180" width="164" height="18" rx="6" fill="#F9FAFB"/>
<rect x="116" y="210" width="98" height="10" rx="5" fill="#F9FAFB"/>
<path d="M154.345 95.0876C154.345 105.99 151.112 116.647 145.055 125.712C138.998 134.777 130.389 141.843 120.317 146.015C110.244 150.187 99.1607 151.279 88.4679 149.152C77.775 147.025 67.953 141.775 60.2439 134.066C52.5348 126.356 47.2848 116.534 45.1578 105.842C43.0309 95.1487 44.1225 84.0653 48.2947 73.9928C52.4668 63.9204 59.5321 55.3113 68.597 49.2543C77.662 43.1973 88.3195 39.9644 99.2219 39.9644V64.1989C93.1127 64.1989 87.1406 66.0105 82.061 69.4046C76.9814 72.7987 73.0223 77.6228 70.6844 83.267C68.3466 88.9111 67.7349 95.1218 68.9267 101.114C70.1185 107.105 73.0604 112.609 77.3803 116.929C81.7001 121.249 87.204 124.191 93.1958 125.383C99.1876 126.575 105.398 125.963 111.042 123.625C116.687 121.287 121.511 117.328 124.905 112.248C128.299 107.169 130.111 101.197 130.111 95.0876H154.345Z" fill="#c8d8fa"/>
<path d="M99.2217 39.9644C106.461 39.9644 113.629 41.3902 120.316 44.1604C127.004 46.9306 133.081 50.9909 138.2 56.1096C143.318 61.2282 147.379 67.305 150.149 73.9928C152.919 80.6807 154.345 87.8487 154.345 95.0876L130.11 95.0876C130.11 91.0312 129.311 87.0146 127.759 83.267C126.207 79.5194 123.932 76.1143 121.063 73.246C118.195 70.3777 114.79 68.1024 111.042 66.5501C107.295 64.9978 103.278 64.1989 99.2217 64.1989V39.9644Z" fill="#F9FAFB"/>
<path d="M232.896 39.9644C243.798 39.9644 254.456 43.1973 263.52 49.2543C272.585 55.3113 279.651 63.9204 283.823 73.9928C287.995 84.0653 289.087 95.1487 286.96 105.842C284.833 116.534 279.583 126.356 271.874 134.066C264.165 141.775 254.343 147.025 243.65 149.152C232.957 151.279 221.873 150.187 211.801 146.015C201.729 141.843 193.119 134.777 187.062 125.712C181.005 116.647 177.772 105.99 177.772 95.0876L202.007 95.0876C202.007 101.197 203.819 107.169 207.213 112.248C210.607 117.328 215.431 121.287 221.075 123.625C226.719 125.963 232.93 126.575 238.922 125.383C244.914 124.191 250.417 121.249 254.737 116.929C259.057 112.609 261.999 107.105 263.191 101.114C264.383 95.1218 263.771 88.9111 261.433 83.267C259.095 77.6228 255.136 72.7986 250.056 69.4046C244.977 66.0105 239.005 64.1989 232.896 64.1989V39.9644Z" fill="#c8d8fa"/>
<path d="M232.896 150.211C218.276 150.211 204.255 144.403 193.918 134.066C183.58 123.728 177.772 109.707 177.772 95.0876C177.772 80.468 183.58 66.4472 193.918 56.1096C204.255 45.772 218.276 39.9644 232.896 39.9644V64.1989C224.703 64.1989 216.847 67.4532 211.054 73.246C205.261 79.0387 202.007 86.8954 202.007 95.0876C202.007 103.28 205.261 111.136 211.054 116.929C216.847 122.722 224.703 125.976 232.896 125.976V150.211Z" fill="#F9FAFB"/>
<path d="M195.5 100L252.5 84.5" stroke="#111928" stroke-width="2" stroke-linecap="round"/>
<path d="M337.5 123.5L352 120.5C357.5 127.167 367.4 140.8 363 142C357.5 143.5 340.5 144.5 327 139C313.5 133.5 262 90.5 254.5 89.5C247 88.5 237.5 89.0002 237.5 86.5002C237.5 84.0002 244 81.5002 254.5 82.5002C262.9 83.3002 313.333 110.167 337.5 123.5Z" fill="#FDBA8C"/>
<path d="M337.5 123.5L352 120.5C357.5 127.167 367.4 140.8 363 142C357.5 143.5 340.5 144.5 327 139C313.5 133.5 262 90.5 254.5 89.5C247 88.5 237.5 89.0002 237.5 86.5002C237.5 84.0002 244 81.5002 254.5 82.5002C262.9 83.3002 313.333 110.167 337.5 123.5Z" fill="url(#paint1_linear_275_1057)"/>
<path d="M402.5 263.5L406 197.5H468C476.8 225.9 477.667 253.333 477 263.5H402.5Z" fill="#2563eb"/>
<path d="M402.5 263.5L406 197.5H468C476.8 225.9 477.667 253.333 477 263.5H402.5Z" fill="url(#paint2_linear_275_1057)"/>
<path d="M426.5 58.4999C419.3 60.0999 419.167 67.8333 419 72.4999L431 95H455.5C454 90.1666 449.5 80.3999 447.5 71.9999C445 61.4999 435.5 56.4999 426.5 58.4999Z" fill="#111928"/>
<circle cx="449" cy="57" r="10" fill="#111928"/>
<path d="M421.694 97.899L423.5 83H431C431.4 93.4 437.833 99.6667 441.5 102C439.5 104.833 434.4 111.4 426 111C417.6 110.6 416.166 104.833 416.5 102L420.057 100.221C420.958 99.7709 421.572 98.8987 421.694 97.899Z" fill="#FDBA8C"/>
<path d="M421.694 97.899L423.5 83H431C431.4 93.4 437.833 99.6667 441.5 102C439.5 104.833 434.4 111.4 426 111C417.6 110.6 416.166 104.833 416.5 102L420.057 100.221C420.958 99.7709 421.572 98.8987 421.694 97.899Z" fill="url(#paint3_linear_275_1057)"/>
<path d="M417.5 76.5C419.1 69.3 422.5 64.8333 424 63.5C426.167 64 430.6 65.9 431 69.5C431.4 73.1 432.833 74.3333 433.5 74.5L434.992 73.8605C436.164 73.3581 437.528 73.7397 438.27 74.7776C438.993 75.7901 438.94 77.174 438.088 78.0806C430.025 86.6581 421.862 87.9448 419.5 87C417 86 415.5 85.5 417.5 76.5Z" fill="#FDBA8C"/>
<path d="M423.807 74.2451C423.682 74.6892 423.22 74.9479 422.776 74.8229C422.332 74.6979 422.073 74.2365 422.198 73.7924C422.323 73.3483 422.785 73.0896 423.229 73.2146C423.673 73.3396 423.932 73.801 423.807 74.2451Z" fill="#111928"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M423.794 70.89C423.247 70.6671 422.709 70.7104 422.154 70.8577C421.94 70.9146 421.72 70.787 421.663 70.5725C421.606 70.3581 421.734 70.1382 421.948 70.0812C422.588 69.9111 423.324 69.8309 424.097 70.146C424.867 70.4594 425.608 71.1374 426.323 72.3462C426.436 72.5372 426.373 72.7835 426.182 72.8965C425.991 73.0094 425.744 72.9461 425.631 72.7552C424.969 71.6358 424.345 71.1145 423.794 70.89Z" fill="#111928"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M420.269 72.1477C420.452 72.2703 420.501 72.5181 420.378 72.701L417.323 77.2596C417.269 77.341 417.303 77.452 417.394 77.4885L419.576 78.3637C419.78 78.4457 419.88 78.6779 419.798 78.8824C419.716 79.0868 419.483 79.1861 419.279 79.1041L417.097 78.2289C416.535 78.0036 416.324 77.3182 416.661 76.8155L419.716 72.257C419.838 72.074 420.086 72.025 420.269 72.1477Z" fill="#111928"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M419.651 81.9222C420.288 82.0548 420.942 81.9126 421.603 81.558C421.798 81.4532 422.042 81.5266 422.146 81.7221C422.251 81.9176 422.178 82.1611 421.982 82.266C421.207 82.6819 420.359 82.8903 419.487 82.7086C418.614 82.5268 417.78 81.9672 417.008 80.9695C416.872 80.7941 416.904 80.5418 417.079 80.406C417.255 80.2702 417.507 80.3024 417.643 80.4778C418.333 81.3699 419.015 81.7897 419.651 81.9222Z" fill="#111928"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M436.632 76.9157C436.929 76.4893 436.997 76.0181 436.978 75.5133C436.97 75.3181 437.123 75.1539 437.318 75.1466C437.513 75.1393 437.677 75.2917 437.685 75.4869C437.706 76.07 437.632 76.7176 437.212 77.3206C436.793 77.9204 436.067 78.4256 434.89 78.8049C434.704 78.8648 434.504 78.7627 434.445 78.5767C434.385 78.3908 434.487 78.1915 434.673 78.1315C435.763 77.7803 436.332 77.3454 436.632 76.9157Z" fill="#111928"/>
<path d="M467 116.5C462.2 108.5 450 103.833 445.5 102.5L438 105.5C434.5 105.833 426.9 106.4 424.5 106C422.1 105.6 415.5 103.5 412.5 102.5L350.5 119L360.5 149.5L394.5 147.5C393.3 163.1 400.667 187.333 404.5 197.5H469.5L467 170.5L490.5 166C484.667 152.833 471.8 124.5 467 116.5Z" fill="#F9FAFB"/>
<path d="M467 116.5C462.2 108.5 450 103.833 445.5 102.5L438 105.5C434.5 105.833 426.9 106.4 424.5 106C422.1 105.6 415.5 103.5 412.5 102.5L350.5 119L360.5 149.5L394.5 147.5C393.3 163.1 400.667 187.333 404.5 197.5H469.5L467 170.5L490.5 166C484.667 152.833 471.8 124.5 467 116.5Z" fill="url(#paint4_linear_275_1057)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M468.623 170.189L450 173.5L445.5 147.5L419.5 155.5L413.375 197.5H468.828L469.222 194.495L467 170.5L468.623 170.189Z" fill="url(#paint5_linear_275_1057)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M394.499 147.5C395.333 142.333 397.699 130.4 400.499 124L354.975 132.65L360.499 149.5L394.499 147.5Z" fill="url(#paint6_linear_275_1057)"/>
<path d="M429 104.5C423.054 104.17 418.972 102.68 416.98 101.608C416.35 101.269 415.595 101.174 414.937 101.455L412.5 102.5C414.5 104.167 420.5 107.5 428.5 107.5C436.5 107.5 442.5 104.167 445.5 102.5L443.495 101.498C442.876 101.188 442.146 101.225 441.549 101.576C439.202 102.953 435.261 104.848 429 104.5Z" fill="#9ab7f6"/>
<path d="M456 172.5L475 169L481 272.5H468.5L456 172.5Z" fill="#FDBA8C"/>
<path d="M456 172.5L475 169L481 272.5H468.5L456 172.5Z" fill="url(#paint7_linear_275_1057)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.427 306.568C27.427 308.25 27.7333 309.861 28.2931 311.348C28.7588 312.585 28.4398 314.033 27.4301 314.886C22.8606 318.744 19.9585 324.516 19.9585 330.965C19.9585 333.247 20.3219 335.444 20.994 337.502C21.3428 338.57 21.0489 339.76 20.2141 340.512C13.943 346.162 10.0005 354.347 10.0005 363.453C10.0005 380.502 23.8214 394.323 40.8704 394.323C57.9193 394.323 71.7402 380.502 71.7402 363.453C71.7402 354.432 67.8711 346.315 61.7018 340.671C60.8728 339.913 60.588 338.72 60.9451 337.655C61.6495 335.553 62.0312 333.304 62.0312 330.965C62.0312 324.516 59.129 318.744 54.5596 314.886C53.5499 314.033 53.2309 312.585 53.6966 311.348C54.2564 309.861 54.5626 308.25 54.5626 306.568C54.5626 299.075 48.4882 293 40.9948 293C33.5015 293 27.427 299.075 27.427 306.568Z" fill="#d6e2fb"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M41.1187 305.725C40.722 305.725 40.4005 306.047 40.4005 306.443L40.4005 425.691C40.4005 426.087 40.722 426.409 41.1187 426.409C41.5153 426.409 41.8369 426.087 41.8369 425.691L41.8369 306.443C41.8369 306.047 41.5154 305.725 41.1187 305.725Z" fill="#9ab7f6"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.0093 359.632C26.6865 359.863 26.6118 360.311 26.8423 360.634L40.5346 379.803C40.7652 380.126 41.2137 380.201 41.5365 379.97C41.8593 379.74 41.934 379.291 41.7035 378.968L28.0112 359.799C27.7807 359.477 27.3321 359.402 27.0093 359.632Z" fill="#9ab7f6"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M55.229 330.007C55.5518 330.237 55.6265 330.686 55.396 331.009L41.7037 350.178C41.4731 350.501 41.0246 350.575 40.7018 350.345C40.379 350.114 40.3042 349.666 40.5348 349.343L54.2271 330.174C54.4576 329.851 54.9062 329.776 55.229 330.007Z" fill="#9ab7f6"/>
<path d="M60.4712 408.518C60.5071 407.701 59.8542 407.019 59.0362 407.019H22.9526C22.1346 407.019 21.4817 407.701 21.5175 408.518L23.881 462.406C23.9147 463.174 24.5473 463.78 25.3161 463.78H56.6727C57.4415 463.78 58.0741 463.174 58.1077 462.406L60.4712 408.518Z" fill="#d6e2fb"/>
<path d="M60.4712 408.518C60.5071 407.701 59.8542 407.019 59.0362 407.019H22.9526C22.1346 407.019 21.4817 407.701 21.5175 408.518L23.881 462.406C23.9147 463.174 24.5473 463.78 25.3161 463.78H56.6727C57.4415 463.78 58.0741 463.174 58.1077 462.406L60.4712 408.518Z" fill="url(#paint8_linear_275_1057)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M703.427 306.568C703.427 308.25 703.733 309.861 704.293 311.348C704.759 312.585 704.44 314.033 703.43 314.886C698.861 318.744 695.959 324.516 695.959 330.965C695.959 333.247 696.322 335.444 696.994 337.502C697.343 338.57 697.049 339.76 696.214 340.512C689.943 346.162 686.001 354.347 686.001 363.453C686.001 380.502 699.821 394.323 716.87 394.323C733.919 394.323 747.74 380.502 747.74 363.453C747.74 354.432 743.871 346.315 737.702 340.671C736.873 339.913 736.588 338.72 736.945 337.655C737.65 335.553 738.031 333.304 738.031 330.965C738.031 324.516 735.129 318.744 730.56 314.886C729.55 314.033 729.231 312.585 729.697 311.348C730.256 309.861 730.563 308.25 730.563 306.568C730.563 299.075 724.488 293 716.995 293C709.502 293 703.427 299.075 703.427 306.568Z" fill="#d6e2fb"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M717.12 305.725C716.723 305.725 716.401 306.047 716.401 306.443L716.401 425.691C716.401 426.087 716.723 426.409 717.12 426.409C717.516 426.409 717.838 426.087 717.838 425.691L717.838 306.443C717.838 306.047 717.516 305.725 717.12 305.725Z" fill="#9ab7f6"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M703.009 359.632C702.687 359.863 702.612 360.311 702.842 360.634L716.535 379.803C716.765 380.126 717.214 380.201 717.537 379.97C717.859 379.74 717.934 379.291 717.703 378.968L704.011 359.799C703.781 359.477 703.332 359.402 703.009 359.632Z" fill="#9ab7f6"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M731.229 330.007C731.552 330.237 731.627 330.686 731.396 331.009L717.704 350.178C717.473 350.501 717.025 350.575 716.702 350.345C716.379 350.114 716.304 349.666 716.535 349.343L730.227 330.174C730.458 329.851 730.906 329.776 731.229 330.007Z" fill="#9ab7f6"/>
<path d="M736.471 408.518C736.507 407.701 735.854 407.019 735.036 407.019H698.953C698.135 407.019 697.482 407.701 697.518 408.518L699.881 462.406C699.915 463.174 700.547 463.78 701.316 463.78H732.673C733.442 463.78 734.074 463.174 734.108 462.406L736.471 408.518Z" fill="#d6e2fb"/>
<path d="M736.471 408.518C736.507 407.701 735.854 407.019 735.036 407.019H698.953C698.135 407.019 697.482 407.701 697.518 408.518L699.881 462.406C699.915 463.174 700.547 463.78 701.316 463.78H732.673C733.442 463.78 734.074 463.174 734.108 462.406L736.471 408.518Z" fill="url(#paint9_linear_275_1057)"/>
<rect width="748" height="42" rx="6" transform="matrix(-1 0 0 1 748 464)" fill="#d6e2fb"/>
<path d="M352 253C352.5 240 357 208.7 371 187.5" stroke="#111928"/>
<rect x="376.143" y="173" width="10" height="20" rx="5" transform="rotate(37.3807 376.143 173)" fill="#111928"/>
<rect width="148" height="283" rx="6" transform="matrix(-1 0 0 1 666 251)" fill="#c8d8fa"/>
<rect x="260" y="251" width="293" height="283" rx="6" fill="#d6e2fb"/>
<rect x="260" y="251" width="293" height="283" rx="6" fill="url(#paint10_linear_275_1057)"/>
<circle cx="406" cy="393" r="97" fill="url(#paint11_linear_275_1057)"/>
<path d="M505.147 224.138C505.068 222.982 505.984 222 507.143 222H531.857C533.016 222 533.932 222.982 533.853 224.138L532 251H507L505.147 224.138Z" fill="#c8d8fa"/>
<path d="M508 232H531L530 251H509L508 232Z" fill="url(#paint12_linear_275_1057)"/>
<path d="M420.5 416C408.5 417.6 409.833 427.667 412 432.5L417 484L431 481C438.333 472.833 454 455 458 449C462 443 456.666 438.5 453.5 437C454.5 421.5 435.5 414 420.5 416Z" fill="#111928"/>
<path d="M408.984 442.218C408.193 444.037 407.042 445.467 405.843 446.318C404.635 447.176 403.46 447.399 402.543 447.001C401.627 446.602 400.988 445.591 400.792 444.122C400.597 442.665 400.857 440.847 401.647 439.029C402.438 437.211 403.589 435.78 404.788 434.929C405.996 434.071 407.171 433.848 408.088 434.246C409.004 434.645 409.643 435.657 409.839 437.125C410.034 438.582 409.774 440.4 408.984 442.218Z" stroke="#111928"/>
<path d="M408.5 470C390.9 464 406.166 439.167 415 428.5C420.591 429.199 419.974 437.329 419.285 442.15C419.127 443.253 419.678 444.339 420.675 444.837C421.494 445.247 422.47 445.186 423.232 444.678L425.873 442.918C428.525 441.15 432.132 442.25 433.346 445.197C434.056 446.922 433.752 448.891 432.629 450.381C429.202 454.928 424.329 462.35 423 468C421.4 474.8 427.666 479.5 431 481L432 495.5C420.4 499.5 413.5 497.167 411.5 495.5L408.5 470Z" fill="#FDBA8C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M408.5 470C408.5 470 408.5 470 408.5 470L411.5 495.5C413.5 497.167 420.4 499.5 432 495.5L431 481C427.667 479.5 421.4 474.8 423 468C423.613 465.396 424.979 462.415 426.608 459.513C419.507 468.662 411.609 470.327 408.5 470L408.5 470Z" fill="url(#paint13_linear_275_1057)"/>
<path d="M403 437L424 443.5" stroke="#111928"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M400.616 456.036C400.665 455.7 400.722 455.361 400.786 455.02C402.007 454.908 403.827 454.438 405.709 453.093C405.934 452.933 406.246 452.985 406.407 453.209C406.567 453.434 406.515 453.746 406.29 453.907C404.139 455.443 402.028 455.952 400.616 456.036Z" fill="#111928"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M410.218 434.877C410.426 434.573 410.634 434.272 410.841 433.976C411.701 435.332 412.059 436.557 412.127 437.237C412.154 437.512 411.954 437.757 411.679 437.784C411.404 437.812 411.159 437.611 411.132 437.336C411.085 436.868 410.834 435.951 410.218 434.877Z" fill="#111928"/>
<path d="M405.41 440.956C405.184 441.484 405.428 442.095 405.956 442.321C406.483 442.548 407.095 442.304 407.321 441.776C407.548 441.248 407.304 440.637 406.776 440.41C406.248 440.184 405.637 440.428 405.41 440.956Z" fill="#111928"/>
<path d="M427.5 452.5C428.667 451.5 431 449.8 431 447C431 444.2 428 444.5 426.5 445.5" stroke="#111928" stroke-linecap="round"/>
<path d="M380.5 499C362.1 507 356.167 554.667 355.5 577.5H478C477.333 554.667 473.1 507 461.5 499C447 489 403.5 489 380.5 499Z" fill="#F9FAFB"/>
<path d="M380.5 499C362.1 507 356.167 554.667 355.5 577.5H478C477.333 554.667 473.1 507 461.5 499C447 489 403.5 489 380.5 499Z" fill="url(#paint14_linear_275_1057)"/>
<rect x="346" y="545" width="143" height="133" rx="16" fill="#d6e2fb"/>
<rect x="346" y="545" width="143" height="133" rx="16" fill="url(#paint15_linear_275_1057)"/>
<path d="M243 494C223 494 211.333 532.333 208 551.5C243.833 570.333 315.5 596.7 315.5 551.5C315.5 506.3 295.5 494.333 285.5 494H243Z" fill="#c8d8fa"/>
<path d="M243 494C223 494 211.333 532.333 208 551.5C243.833 570.333 315.5 596.7 315.5 551.5C315.5 506.3 295.5 494.333 285.5 494H243Z" fill="url(#paint16_linear_275_1057)"/>
<path d="M241 511.5C243.8 527.1 243.167 548 242.5 556.5H304.5C304.5 541.5 287 500.5 287 488.5C287 476.5 293 426 268.5 426C244 426 237.5 492 241 511.5Z" fill="#111928"/>
<rect x="185" y="545" width="143" height="133" rx="16" fill="#d6e2fb"/>
<rect x="185" y="545" width="143" height="133" rx="16" fill="url(#paint17_linear_275_1057)"/>
<path d="M91.9301 416C103.93 417.6 102.597 427.667 100.43 432.5L95.4302 484L81.4302 481C74.0968 472.833 66 464 62 458C58 452 55 437.5 62.5 435.5C62.5 424 76.9301 414 91.9301 416Z" fill="#111928"/>
<path d="M103.93 470C124 470 106.264 439.167 97.4302 428.5C91.8227 429.201 95.5297 438.142 96.982 443.148C97.2983 444.238 96.7394 445.345 95.7241 445.853C94.9194 446.255 93.9639 446.213 93.1979 445.741L90.7434 444.229C88.2156 442.673 84.9122 444.135 84.3651 447.053C84.1337 448.287 84.4721 449.551 85.1927 450.579C88.2384 454.925 92.0213 462.513 93.4299 468.5C95.0299 475.3 84.7633 479.5 81.4299 481L80.4299 495.5C92.0299 499.5 98.9299 497.167 100.93 495.5L103.93 470Z" fill="#FDBA8C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M103.999 470C103.976 470 103.953 470 103.93 470L100.93 495.5C98.9299 497.166 92.0298 499.5 80.4298 495.5L81.4298 481C81.5844 480.93 81.7539 480.855 81.9365 480.774C85.6899 479.105 94.9557 474.984 93.4298 468.5C92.9645 466.522 92.24 464.369 91.3686 462.217C96.1428 466.414 101.578 469.714 103.999 470Z" fill="url(#paint18_linear_275_1057)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M102.212 434.877C102.004 434.573 101.796 434.272 101.588 433.976C100.728 435.332 100.371 436.557 100.303 437.237C100.275 437.512 100.476 437.757 100.751 437.784C101.025 437.812 101.27 437.611 101.298 437.336C101.344 436.868 101.595 435.951 102.212 434.877Z" fill="#111928"/>
<path d="M107.019 440.956C107.246 441.484 107.002 442.095 106.474 442.321C105.946 442.548 105.335 442.304 105.108 441.776C104.882 441.248 105.126 440.637 105.654 440.41C106.182 440.184 106.793 440.428 107.019 440.956Z" fill="#111928"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M87.0829 446.157C86.7036 446.539 86.4999 447.067 86.4999 447.721C86.4999 448.982 87.1035 449.973 87.7997 450.725C88.3761 451.348 89.053 451.844 89.5472 452.205C89.6426 452.275 89.7312 452.34 89.811 452.4C90.0319 452.566 90.3453 452.521 90.511 452.3C90.6767 452.079 90.632 451.766 90.4111 451.6C90.3181 451.53 90.2198 451.458 90.1177 451.383C89.6225 451.02 89.038 450.591 88.5335 450.046C87.9333 449.398 87.4999 448.638 87.4999 447.721C87.4999 447.285 87.6296 447.026 87.7919 446.863C87.9632 446.69 88.2238 446.572 88.5693 446.524C89.2751 446.425 90.163 446.644 90.7479 446.986C90.9864 447.125 91.2926 447.044 91.4318 446.806C91.5709 446.567 91.4904 446.261 91.2519 446.122C90.5035 445.685 89.3914 445.399 88.4306 445.533C87.9427 445.602 87.4534 445.785 87.0829 446.157Z" fill="#111928"/>
<path d="M132.5 499C150.9 507 156.833 554.667 157.5 577.5H35C35.6667 554.667 39.9 507 51.5 499C66 489 109.5 489 132.5 499Z" fill="#F9FAFB"/>
<rect x="24" y="545" width="143" height="133" rx="16" fill="#d6e2fb"/>
<rect x="24" y="545" width="143" height="133" rx="16" fill="url(#paint19_linear_275_1057)"/>
<defs>
<linearGradient id="paint0_linear_275_1057" x1="273.5" y1="291" x2="219.5" y2="125.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#c8d8fa"/>
<stop offset="1" stop-color="#c8d8fa" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_275_1057" x1="483" y1="116.5" x2="300.798" y2="143.181" gradientUnits="userSpaceOnUse">
<stop stop-color="#7F270F"/>
<stop offset="1" stop-color="#7F270F" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint2_linear_275_1057" x1="439.838" y1="147.5" x2="439.838" y2="263.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#111928"/>
<stop offset="1" stop-color="#111928" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint3_linear_275_1057" x1="429.478" y1="73" x2="429.478" y2="99" gradientUnits="userSpaceOnUse">
<stop stop-color="#7F270F"/>
<stop offset="1" stop-color="#7F270F" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint4_linear_275_1057" x1="479" y1="256" x2="479" y2="137.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#c8d8fa"/>
<stop offset="1" stop-color="#c8d8fa" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint5_linear_275_1057" x1="463" y1="191" x2="434.5" y2="178" gradientUnits="userSpaceOnUse">
<stop stop-color="#c8d8fa"/>
<stop offset="1" stop-color="#c8d8fa" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint6_linear_275_1057" x1="400" y1="156.5" x2="388.5" y2="133.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#c8d8fa"/>
<stop offset="1" stop-color="#c8d8fa" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint7_linear_275_1057" x1="468.5" y1="84" x2="468.5" y2="218" gradientUnits="userSpaceOnUse">
<stop stop-color="#7F270F"/>
<stop offset="1" stop-color="#7F270F" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint8_linear_275_1057" x1="-25.4505" y1="445.529" x2="87.7106" y2="445.529" gradientUnits="userSpaceOnUse">
<stop stop-color="#9ab7f6"/>
<stop offset="1" stop-color="#9ab7f6" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint9_linear_275_1057" x1="650.549" y1="445.529" x2="763.711" y2="445.529" gradientUnits="userSpaceOnUse">
<stop stop-color="#9ab7f6"/>
<stop offset="1" stop-color="#9ab7f6" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint10_linear_275_1057" x1="307.5" y1="506.135" x2="307.5" y2="345.043" gradientUnits="userSpaceOnUse">
<stop stop-color="#c8d8fa"/>
<stop offset="1" stop-color="#c8d8fa" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint11_linear_275_1057" x1="406" y1="296" x2="406" y2="453.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#F9FAFB"/>
<stop offset="1" stop-color="#F9FAFB" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint12_linear_275_1057" x1="519.5" y1="226" x2="519.5" y2="256.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#d6e2fb"/>
<stop offset="1" stop-color="#d6e2fb" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint13_linear_275_1057" x1="420.5" y1="450" x2="422.25" y2="488.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#7F270F"/>
<stop offset="1" stop-color="#7F270F" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint14_linear_275_1057" x1="416.75" y1="416" x2="416.75" y2="577.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#c8d8fa"/>
<stop offset="1" stop-color="#c8d8fa" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint15_linear_275_1057" x1="417.5" y1="508" x2="417.5" y2="678" gradientUnits="userSpaceOnUse">
<stop stop-color="#c8d8fa"/>
<stop offset="1" stop-color="#c8d8fa" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint16_linear_275_1057" x1="277" y1="607.5" x2="277" y2="494" gradientUnits="userSpaceOnUse">
<stop stop-color="#2563eb"/>
<stop offset="1" stop-color="#2563eb" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint17_linear_275_1057" x1="256.5" y1="508" x2="256.5" y2="678" gradientUnits="userSpaceOnUse">
<stop stop-color="#c8d8fa"/>
<stop offset="1" stop-color="#c8d8fa" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint18_linear_275_1057" x1="95.25" y1="452" x2="95.25" y2="493" gradientUnits="userSpaceOnUse">
<stop stop-color="#7F270F"/>
<stop offset="1" stop-color="#7F270F" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint19_linear_275_1057" x1="95.5" y1="508" x2="95.5" y2="678" gradientUnits="userSpaceOnUse">
<stop stop-color="#c8d8fa"/>
<stop offset="1" stop-color="#c8d8fa" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>}
          </svg>
        </div>
        {/* 技能标签 */}
        <div className="mt-6 flex justify-center space-x-2">
          {['Skill Extraction', 'Curriculum Mapping', 'Design Suggestions'].map((skill, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm text-green-700 text-xs px-3 py-1 rounded-full border border-green-200 font-medium"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

  // 监听滚动以更新导航状态
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            const pageMap = {
              'hero': 'home',
              'about': 'about',
              'services': 'services'
            };
            setActiveSection(pageMap[section] || 'home');
            break;
          }
        }
      }
      
      // 控制返回顶部按钮显示
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 滚动到顶部函数
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const stats = [
    { number: '800+', label: 'Skill Database' },
    { number: '6', label: 'Domains' },
    { number: '84+%', label: 'Success Rate' }
  ];

  // About Section统计数据
  const aboutStats = [
    { number: '1,000+', label: 'Job Descriptions Analyzed', icon: Database },
    { number: '6', label: 'Professional Domains', icon: Target },
    { number: '84%', label: 'Skill Matching Accuracy', icon: Zap },
    { number: '24/7', label: 'Response Efficiency', icon: Clock }
  ];

  const domains = [
    { 
      title: 'CyberSecurity Architect', 
      desc: 'Design and oversee secure architectures across systems and networks',
      color: 'bg-purple-100 text-purple-800'
    },
    { 
      title: 'CyberSecurity Analyst', 
      desc: 'Monitor, detect, and respond to security incidents in real-time',
      color: 'bg-blue-100 text-blue-800'
    },
    { 
      title: 'CyberSecurity Consultant', 
      desc: 'Advise clients on security strategies, controls, and risk mitigation',
      color: 'bg-orange-100 text-orange-800'
    },
    { 
      title: 'CyberSecurity Operations', 
      desc: 'Maintain and support core security infrastructure and respond to events',
      color: 'bg-green-100 text-green-800'
    },
    { 
      title: 'Information Security', 
      desc: 'Manage information protection strategies, compliance, and governance',
      color: 'bg-teal-100 text-teal-800'
    },
    { 
      title: 'CyberSecurity Testers', 
      desc: 'Conduct security testing and identify vulnerabilities through simulated attacks',
      color: 'bg-pink-100 text-pink-800'
    }
  ];

  const processSteps = [
    { step: '01', title: 'Data Input', desc: 'Upload cybersecurity job descriptions or course content for analysis' },
    { step: '02', title: 'Classification and Extraction', desc: 'SVM + KeyBERT method to classify job roles and extract domain-specific skill keywords' },
    { step: '03', title: 'LLM-based Interpretation', desc: 'Qwen-0.6B explains extracted skills to support student understanding' },
    { step: '04', title: 'Curriculum Mapping', desc: 'Sparse Encoder semantically aligns extracted skills with course skill sets' }
  ];

  const services = [
    {
      id: 'single',
      icon: BarChart3,
      title: 'Single Analysis',
      description: 'Extract cybersecurity skill keywords from a single job ad.',
      features: ['Real-time analysis', 'Accurate extraction', 'Detailed reports and Explanation']
    },
    {
      id: 'batch',
      icon: FolderOpen,
      title: 'Batch Processing',
      description: 'Upload multiple cybersecurity job ads and extract structured skill data.',
      features: ['Bulk file processing', 'Progress tracking', 'LLM Interpretation' ]
    },
    {
      id: 'course',
      icon: Workflow,
      title: 'Course Mapping',
      description: 'Align course content with real-world cybersecurity job market requirements.',
      features: ['Curriculum alignment', 'Gap analysis', 'Improvement Suggestions']
    }
  ];

  return (
    <>
      <div className="pt-16">
        {/* Hero Section */}
        <section id="hero" className="pt-24 pb-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                    Analysis Platform
                  </div>
                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Solutions for{' '}
                    <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      Skill Extraction And Curriculum Mapping
                    </span>
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    EduCareer Bridge helps students explore career-aligned skills
                    and enables educators to map course content across six cybersecurity domains.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => {
                      const servicesSection = document.getElementById('services');
                      if (servicesSection) {
                        servicesSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="group bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Start Analysis
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                    className="px-8 py-4 border-2 border-green-600 text-green-600 rounded-xl font-semibold hover:bg-green-600 hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    Learn More
                  </button>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 pt-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                      <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Hero Visual - Improved */}
              <HeroVisualDemo />
            </div>
          </div>
        </section>

        {/* 优化后的About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Our Platform</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We Help Organizations Bridge the Gap Between Cybersecurity Job Market Demands and Curriculum Design
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {aboutStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                    <IconComponent className="h-8 w-8 text-green-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
              {/* Left Column - Domains and Process */}
              <div className="space-y-8">
                {/* 6 Cybersecurity Domains */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-center text-gray-900 mb-6">Our 6 Cybersecurity Domains</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {domains.map((domain, index) => (
                      <div key={index} className="text-center mb-4">
                        <div className={`${domain.color} px-3 py-1 rounded-lg font-medium mb-2 inline-block text-sm`}>
                          {domain.title}
                        </div>
                        <p className="text-xs text-gray-600">{domain.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Analysis Process - Visual Timeline */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-center text-gray-900 mb-6">Our Analysis Process</h3>
                  <div className="space-y-4">
                    {processSteps.map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1 text-sm">{item.title}</h4>
                          <p className="text-xs text-gray-600">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Main Content */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Transforming Cybersecurity Skill Analysis with Advanced Technology
                </h3>
                
                {/* Simplified Main Description */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-6">
                  <p className="text-gray-700 font-medium">
                    Our platform leverages machine learning models to analyze cybersecurity job descriptions and extract meaningful skill requirements across 6 specialized domains.
                  </p>
                </div>

                {/* Learn More Toggle */}
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="flex items-center gap-2 text-green-600 hover:text-green-800 font-medium mb-6 transition-colors"
                >
                  {showDetails ? 'Show Less' : 'Learn More Technical Details'}
                  {showDetails ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>

                {/* Detailed Technical Information - Collapsible */}
                {showDetails && (
                  <div className="bg-gray-50 rounded-xl p-6 mb-8 border-l-4 border-green-500">
                    <h4 className="font-semibold text-gray-900 mb-3">Technical Implementation Details</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Leveraging a hybrid pipeline of machine learning and rule-based techniques, our system has analyzed thousands of cybersecurity job descriptions to support curriculum design and workforce development.
                    </p>
                    <div className="grid gap-3 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">SVM Classifier</span>
                        <span>Combined with rule-based logic to categorize job roles</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-xs font-medium">KeyBERT Extraction</span>
                        <span>Identify relevant skill keywords</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded text-xs font-medium">Qwen-0.6B</span>
                        <span>Language model interprets extracted skills to enhance student understanding</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">Sparse Encoder</span>
                        <span>Semantically map skills to course skill sets for accurate curriculum-to-market alignment</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <Award className="h-6 w-6 text-green-600" />
                      <h4 className="font-semibold">Industry Alignment</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      Continuously updated with the latest skill sets and technology demands from the cybersecurity job market, ensuring alignment with real-world industry needs.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <Brain className="h-6 w-6 text-green-600" />
                      <h4 className="font-semibold">AI-Enhanced Analysis</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      Powered by large language models and Sparse Encoder techniques to extract and interpret skills accurately while capturing contextual variations.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <Clock className="h-6 w-6 text-green-600" />
                      <h4 className="font-semibold">Fast Processing</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      Fast processing times with real-time analysis and instant results delivery.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <Shield className="h-6 w-6 text-green-600" />
                      <h4 className="font-semibold">Privacy by Design</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      No user data is stored or transmitted to external servers. All analyses are performed locally with LLMs deployed on edge servers to ensure privacy, control, and compliance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive cybersecurity skill analysis solutions across 6 specialized domains
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <div 
                    key={service.id} 
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden transform hover:scale-105 cursor-pointer"
                    onClick={() => {
                      // 根据服务类型跳转到对应的功能页面
                      if (service.id === 'single') {
                        setCurrentPage('single-analysis');
                      } else if (service.id === 'batch') {
                        setCurrentPage('batch-processing');
                      } else if (service.id === 'course') {
                        setCurrentPage('course-mapping');
                      }
                    }}
                  >
                    <div className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-green-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                      
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex items-center text-green-600 font-medium group-hover:gap-3 transition-all">
                        Try {service.title}
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-full shadow-lg hover:shadow-2xl transform transition-all duration-300 z-50 hover:scale-110 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-6 w-6" />
      </button>
    </>
  );
};

export default HomePage;
