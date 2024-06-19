import { LucideIcon, LucideProps, Moon, SunMedium } from "lucide-react";

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  logo: (props: LucideProps) => (
    // <svg
    //   {...props}
    //   viewBox="0 0 699 143"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path d="M56.2602 55.1404V64.9204H86.4602V81.9204H56.2602V107.66H34.9902V38.1504H90.3502V55.1504H56.2602V55.1404Z" />
    //   <path d="M86.6504 107.66V92.4704L119.13 55.1504H86.6504V38.1504H144.96V53.4404L112.48 90.6704H144.96V107.67H86.6504V107.66Z" />
    //   <path d="M211.141 38.1399C220.321 38.1399 227.081 40.2499 231.411 44.4499C235.751 48.6599 237.911 55.1999 237.911 64.0599C237.911 72.5399 235.581 78.7999 230.931 82.8099C226.281 86.8299 219.011 88.8399 209.141 88.8399H199.831V107.64H178.561V38.1299H211.141V38.1399ZM207.531 72.3299C210.701 72.3299 213.041 71.6599 214.561 70.3399C216.081 69.0099 216.841 66.9199 216.841 64.0699C216.841 61.0299 216.081 58.7799 214.561 57.3299C213.041 55.8699 210.701 55.1499 207.531 55.1499H199.841V72.3399H207.531V72.3299Z" />
    //   <path d="M284.071 107.66L272.861 86.6704H266.401V107.66H245.221V38.1504H278.271C286.881 38.1504 293.401 40.2904 297.831 44.5604C302.261 48.8304 304.481 55.1204 304.481 63.4104C304.481 74.3604 300.681 81.0404 293.081 83.4504L307.041 107.67H284.071V107.66ZM281.461 68.3404C282.821 67.1404 283.501 65.3604 283.501 63.0204C283.501 57.7704 280.841 55.1404 275.521 55.1404H266.401V70.1404H275.521C278.121 70.1504 280.101 69.5404 281.461 68.3404Z" />
    //   <path d="M335.82 55.1404V64.3504H366.11V81.3504H335.82V90.6604H370.01V107.66H314.65V38.1504H370.01V55.1504H335.82V55.1404Z" />
    //   <path d="M458.331 38.1396V107.65H437.151V73.3697L419.111 99.3896L401.641 73.4696V107.66H380.461V38.1497H401.261L419.211 67.3997L437.731 38.1497H458.331V38.1396Z" />
    //   <path d="M492.42 107.66H471.24V38.1504H492.42V107.66Z" />
    //   <path d="M663.761 38.1396V107.65H642.581V73.3697L624.541 99.3896L607.071 73.4696V107.66H585.891V38.1497H606.691L624.641 67.3997L643.161 38.1497H663.761V38.1396Z" />
    //   <path d="M689.51 3.23047H572.98V12.4805H689.51V133.42H9.25V12.4805H521.22V3.23047H9.25H0V12.4805V133.42V142.67H9.25H689.51H698.75V133.42V12.4805V3.23047H689.51Z" />
    //   <path d="M550.69 11.56C553.33 6.4 550.41 0 550.41 0C548.67 5.11 546.2 10.08 546.2 10.08C543.28 17.63 547.15 21.39 547.15 21.39C547.15 21.39 548.05 16.73 550.69 11.56Z" />
    //   <path d="M568.31 73.4203C568.31 73.4203 581.11 49.8503 567.95 40.0203C567.95 40.0203 570.53 46.3603 567.16 50.1203C567.16 50.1203 563.83 42.7803 561.27 39.6203C558.7 36.4603 555.38 27.5003 556.6 21.0503C556.6 21.0503 551.42 24.5003 548.14 34.0203C548.14 34.0203 540.35 27.6603 539.76 20.7603C539.17 13.8603 541.15 10.0703 541.15 10.0703C541.15 10.0703 522.35 24.8003 517.01 38.7803C517.01 38.7803 514.26 43.3303 514.71 50.9003C514.71 50.9003 507.64 50.8403 507.97 39.2203C507.97 39.2203 499.05 59.2603 510.72 72.3403C510.72 72.3403 504.21 73.1303 501.18 68.8003C501.18 68.8003 506.4 99.5003 538.96 107.64C538.96 107.64 574.66 102.34 577.1 67.2303C577.1 67.2403 575.83 70.7803 568.31 73.4203ZM543.12 97.6903V96.2903L539.13 100.08L535.14 96.2903V97.6903L531.15 92.9203L539.12 88.1803L547.09 92.9203L543.12 97.6903ZM554.69 76.9503L551.83 75.1003L554.47 80.1003L549.67 89.1903L540.77 85.1503V81.8403L545.71 79.4803L547.73 75.4403L545.48 76.0603L544.08 74.8303L539.14 76.7903L534.2 74.8303L532.8 76.0603L530.55 75.4403L532.57 79.4803L537.51 81.8403V85.1503L528.61 89.1903L523.81 80.1003L526.45 75.1003L523.59 76.9503L518.09 69.3203L520.22 62.3003L524.15 66.6203L529.9 67.6903L529.03 72.5703L534.25 66.2303L533.24 60.7903L531.78 63.7603L527.35 61.0103L520.67 59.5503L529.59 49.6103L539.13 52.8703L548.67 49.6103L557.59 59.5503L550.91 61.0103L546.48 63.7603L545.02 60.7903L544.01 66.2303L549.23 72.5703L548.36 67.6903L554.11 66.6203L558.04 62.3003L560.17 69.3203L554.69 76.9503Z" />
    // </svg>

    // <svg
    //   {...props}
    //   viewBox="0 0 842 171"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path d="M236.019 57.541H228.629V119.701H236.019V57.541Z" />
    //   <path d="M334.21 82.0801C334.21 102.89 316.35 104.58 305.48 104.58H278.43V119.75H262.42V59.5801H305.48C316.34 59.5801 334.21 61.2701 334.21 82.0801ZM317.44 82.0801C317.44 77.3601 315.33 74.7501 306.82 74.7501H278.42V89.5001H306.82C315.33 89.5001 317.44 86.8001 317.44 82.0801Z" />
    //   <path d="M395.8 103.06L414.08 119.74H392.26L376.42 104.57H355.27V119.74H339.26V59.5801H382.32C393.19 59.5801 411.05 61.2701 411.05 82.0801C411.05 95.3101 403.8 100.79 395.8 103.06ZM355.27 89.5001H383.67C392.18 89.5001 394.29 86.8001 394.29 82.0801C394.29 77.3601 392.18 74.7501 383.67 74.7501H355.27V89.5001Z" />
    //   <path d="M481.23 59.5801V74.5001H431.69V82.8401H481.23V96.9101H431.69V104.83H481.23V119.74H415.76V59.5801H481.23Z" />
    //   <path d="M555.71 59.5801H581.66V119.74H565.65V76.1801L545.01 119.74H524.54L503.9 76.1801V119.74H487.98V59.5801H513.85L534.83 102.72L555.71 59.5801Z" />
    //   <path d="M588.391 59.5801H604.311V119.74H588.391V59.5801Z" />
    //   <path d="M123.48 59.5801V74.5001H74.0198V82.8401H123.48V98.6001H74.0198V119.75H58.0098V59.5801H123.48Z" />
    //   <path d="M205.119 75.8501L155.489 104.67H205.119V119.75H128.529V103.49L178.069 74.7601H129.369V59.5801H205.119V75.8501Z" />
    //   <path d="M759.769 59.5801H785.719V119.74H769.709V76.1801L749.069 119.74H728.599L707.959 76.1801V119.74H692.039V59.5801H717.909L738.889 102.72L759.769 59.5801Z" />
    //   <path d="M638.57 63.5805C638.66 63.4905 638.76 63.4005 638.85 63.3105L638.72 63.3405L638.57 63.5805Z" />
    //   <path d="M659.07 59.6211V75.4411C659.73 74.5411 660.62 74.2611 660.62 74.2611C659 76.9911 662.55 81.2411 662.55 81.2411C664.83 78.7711 663.08 74.6111 663.08 74.6111C671.99 81.0511 663.33 96.5211 663.33 96.5211C668.42 94.7911 669.28 92.4711 669.28 92.4711C668.53 102.931 663.14 109.341 657.47 113.241C651.11 118.511 643.47 119.621 643.47 119.621C637.82 118.251 633.59 115.761 630.41 112.931C619.9 105.011 617.87 93.5011 617.87 93.5011C619.92 96.3311 623.77 96.9011 623.77 96.9011C616.63 85.7211 622.47 74.0911 622.47 74.0911C622.24 81.7111 627.03 81.7511 627.03 81.7511C627.03 81.7511 624.53 76.2011 626.24 72.6911C626.24 72.6911 626.31 75.7811 628.05 77.2011C628.06 77.1811 628.07 77.1611 628.07 77.1411V59.6211H612.33V59.6311H612.16V98.7311C612.16 108.601 632.81 127.501 643.56 127.501C654.31 127.501 674.87 108.591 674.87 98.7311V82.5311C674.93 81.7211 674.98 80.9111 674.98 80.0911V59.6211H659.07Z" />
    //   <path d="M659.26 101.421C659.26 101.421 666.14 88.7413 659.06 83.4613C659.06 83.4613 660.45 86.8713 658.64 88.8913C658.64 88.8913 656.85 84.9413 655.47 83.2513C654.09 81.5513 652.3 76.7313 652.96 73.2713C652.96 73.2713 650.18 75.1313 648.41 80.2413C648.41 80.2413 644.22 76.8213 643.9 73.1113C643.58 69.4013 644.65 67.3613 644.65 67.3613C644.65 67.3613 634.54 75.2813 631.67 82.8013C631.67 82.8013 630.19 85.2513 630.43 89.3213C630.43 89.3213 626.63 89.2913 626.81 83.0413C626.81 83.0413 622.01 93.8213 628.29 100.851C628.29 100.851 624.79 101.271 623.16 98.9513C623.16 98.9513 625.97 115.461 643.48 119.841C643.48 119.841 662.68 116.991 663.99 98.1113C663.99 98.0913 663.31 100.001 659.26 101.421ZM645.72 114.471V113.721L643.58 115.761L641.44 113.721V114.471L639.3 111.901L643.59 109.351L647.88 111.901L645.72 114.471ZM651.94 103.321L650.4 102.321L651.82 105.011L649.24 109.901L644.46 107.731V105.951L647.12 104.681L648.21 102.511L647 102.841L646.25 102.181L643.59 103.241L640.93 102.181L640.18 102.841L638.97 102.511L640.06 104.681L642.72 105.951V107.731L637.94 109.901L635.36 105.011L636.78 102.321L635.24 103.321L632.28 99.2113L633.43 95.4413L635.54 97.7613L638.63 98.3313L638.16 100.961L640.97 97.5513L640.43 94.6213L639.65 96.2213L637.27 94.7413L633.68 93.9613L638.48 88.6213L643.61 90.3713L648.74 88.6213L653.54 93.9613L649.95 94.7413L647.57 96.2213L646.79 94.6213L646.25 97.5513L649.06 100.961L648.59 98.3313L651.68 97.7613L653.79 95.4413L654.94 99.2113L651.94 103.321Z" />
    //   <path d="M811.909 144.491H33.5391V35.6309H811.909V144.491ZM40.5391 137.491H804.909V42.6309H40.5391V137.491Z" />
    // </svg>

    <svg
      {...props}
      viewBox="0 0 1066 197"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_275_2)">
        <path d="M273.33 148.59V47.3398H329.25C343.137 47.3398 353.82 50.5732 361.3 57.0398C368.78 63.5065 372.517 73.1732 372.51 86.0398C372.51 98.9665 368.793 108.633 361.36 115.04C353.927 121.447 343.26 124.66 329.36 124.68H303.58V148.54L273.33 148.59ZM303.58 99.5398H326.84C331.573 99.5398 335.287 98.3965 337.98 96.1098C340.673 93.8232 342.007 90.4699 341.98 86.0499C341.98 81.6299 340.647 78.2765 337.98 75.9898C335.313 73.7032 331.6 72.5565 326.84 72.5499H303.58V99.5398Z" />
        <path d="M488.549 148.59H458.789L444.079 121.11H416.369V148.59H386.119V47.3398H442.399C456.466 47.3398 467.166 50.5032 474.499 56.8298C481.832 63.1565 485.499 72.6132 485.499 85.1998C485.499 98.2998 480.316 108.183 469.949 114.85L488.549 148.59ZM416.369 72.5898V98.3398H440.499C445.319 98.3398 448.986 97.2365 451.499 95.0298C454.012 92.8232 455.276 89.6298 455.289 85.4498C455.289 81.2698 454.026 78.0765 451.499 75.8698C448.972 73.6632 445.306 72.5565 440.499 72.5499L416.369 72.5898Z" />
        <path d="M501.561 148.59V47.3398H590.741V71.6798H531.811V87.6798H588.571V108.05H531.811V124.05H590.741V148.51L501.561 148.59Z" />
        <path d="M605.68 148.59V47.3398H643.88L663.28 109.52H665.5L684.85 47.3398H723.17V148.59H694.25V98.3398H691.84L675.84 148.59H653.04L637.04 98.3398H634.5V148.59H605.68Z" />
        <path d="M737.99 148.59V47.3398H768.24V148.59H737.99Z" />
        <path d="M899.6 148.59V47.3398H937.8L957.21 109.52H959.37L978.78 47.3398H1017.09V148.59H988.17V98.3398H985.76L969.76 148.59H946.98L930.98 98.3398H928.45V148.59H899.6Z" />
        <path d="M228.831 71.8301V47.3701H136.891H136.641H47.9609V148.59H78.2009V111.83H134.121V89.7801H78.2009V72.6701H136.641H136.891H189.661V74.9601L135.321 124.13V148.59H228.101V123.28H173.761V120.99L228.831 71.8301Z" />
        <path d="M858.499 47.4297V72.6697C859.123 71.8108 859.985 71.1537 860.979 70.7797C858.389 75.1397 864.059 81.9197 864.059 81.9197C867.699 77.9797 864.909 71.3397 864.909 71.3397C879.129 81.6297 865.299 106.34 865.299 106.34C873.429 103.58 874.799 99.8797 874.799 99.8797C873.599 116.56 864.989 126.81 855.949 133.03C849.454 138.217 841.776 141.714 833.599 143.21C825.873 141.441 818.711 137.774 812.759 132.54C802.694 124.843 795.623 113.882 792.759 101.54C796.039 106.07 802.179 106.98 802.179 106.98C790.779 89.1397 800.099 70.5697 800.099 70.5697C799.739 82.7397 807.379 82.7897 807.379 82.7897C807.379 82.7897 803.379 73.9297 806.129 68.3297C806.129 68.3297 806.229 73.2597 809.019 75.5197V75.4297V47.4297H783.619V109.83C783.619 125.58 816.619 155.75 833.739 155.75C850.859 155.75 883.739 125.58 883.739 109.83V83.9997C883.839 82.7097 883.909 81.4097 883.909 80.0997V47.4297H858.499Z" />
        <path d="M858.839 114.14C858.839 114.14 869.839 93.9003 858.529 85.4703C858.529 85.4703 860.739 90.9203 857.849 94.1503C857.849 94.1503 854.999 87.8503 852.789 85.1503C850.579 82.4503 847.789 74.7403 848.789 69.2103C848.789 69.2103 844.349 72.2103 841.529 80.3403C841.529 80.3403 834.839 74.8803 834.339 68.9603C833.839 63.0403 835.529 59.7803 835.529 59.7803C835.529 59.7803 819.389 72.4303 814.809 84.4203C813.181 87.6347 812.488 91.2415 812.809 94.8303C812.809 94.8303 806.739 94.8303 807.029 84.8303C807.029 84.8303 799.369 102.03 809.389 113.26C809.389 113.26 803.799 113.93 801.199 110.26C801.199 110.26 805.679 136.61 833.619 143.6C833.619 143.6 864.269 139.05 866.359 108.91C866.379 108.84 865.299 111.88 858.839 114.14ZM837.219 134.98V133.77L833.799 137.03L830.379 133.77V134.98L826.959 130.88L833.799 126.81L840.639 130.88L837.219 134.98ZM847.149 117.18L844.689 115.59L846.949 119.87L842.829 127.68L835.199 124.21V121.34L839.439 119.34L841.169 115.88L839.239 116.41L838.039 115.35L833.799 117.03L829.559 115.34L828.349 116.4L826.429 115.87L828.159 119.33L832.399 121.33V124.17L824.769 127.64L820.649 119.83L822.909 115.55L820.499 117.18L815.779 110.62L817.609 104.62L820.979 108.33L825.919 109.25L825.179 113.44L829.659 107.99L828.789 103.32L827.499 105.85L823.689 103.49L817.959 102.24L825.619 93.7103L833.809 96.5103L841.999 93.7103L849.659 102.24L843.929 103.49L840.119 105.85L838.859 103.34L837.989 108.01L842.469 113.46L841.719 109.27L846.659 108.35L850.039 104.64L851.869 110.64L847.149 117.18Z" />
        <path d="M1065.5 196.65H0V0H1065.5V196.65ZM12 184.65H1053.5V12H12V184.65Z" />
      </g>
      <defs>
        <clipPath id="clip0_275_2">
          <rect width="1065.5" height="196.65" />
        </clipPath>
      </defs>
    </svg>
  ),
};
