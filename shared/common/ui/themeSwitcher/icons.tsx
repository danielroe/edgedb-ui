import {HTMLAttributes} from "react";

export function LightThemeIcon(props: HTMLAttributes<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.99951 1C8.99951 0.447715 9.44723 0 9.99951 0C10.5518 0 10.9995 0.447715 10.9995 1V2C10.9995 2.55228 10.5518 3 9.99951 3C9.44723 3 8.99951 2.55228 8.99951 2V1ZM9.99951 13C11.6564 13 12.9995 11.6569 12.9995 10C12.9995 8.34315 11.6564 7 9.99951 7C8.34266 7 6.99951 8.34315 6.99951 10C6.99951 11.6569 8.34266 13 9.99951 13ZM9.99951 16C13.3132 16 15.9995 13.3137 15.9995 10C15.9995 6.68629 13.3132 4 9.99951 4C6.6858 4 3.99951 6.68629 3.99951 10C3.99951 13.3137 6.6858 16 9.99951 16ZM9.99951 17C9.44723 17 8.99951 17.4477 8.99951 18V19C8.99951 19.5523 9.44723 20 9.99951 20C10.5518 20 10.9995 19.5523 10.9995 19V18C10.9995 17.4477 10.5518 17 9.99951 17ZM15.6567 2.92879C16.0472 2.53826 16.6804 2.53826 17.0709 2.92879C17.4614 3.31931 17.4614 3.95248 17.0709 4.343L16.3638 5.05011C15.9732 5.44063 15.3401 5.44063 14.9496 5.05011C14.559 4.65958 14.559 4.02642 14.9496 3.63589L15.6567 2.92879ZM5.04988 14.9498C4.65936 14.5593 4.02619 14.5593 3.63567 14.9498L2.92856 15.6569C2.53804 16.0474 2.53804 16.6806 2.92856 17.0711C3.31908 17.4616 3.95225 17.4616 4.34277 17.0711L5.04988 16.364C5.4404 15.9735 5.4404 15.3403 5.04988 14.9498ZM19 9C19.5523 9 20 9.44772 20 10C20 10.5523 19.5523 11 19 11H18C17.4477 11 17 10.5523 17 10C17 9.44771 17.4477 9 18 9H19ZM3 10C3 9.44772 2.55228 9 2 9H1C0.447715 9 0 9.44771 0 10C0 10.5523 0.447715 11 1 11H2C2.55228 11 3 10.5523 3 10ZM17.0712 17.0709C16.6807 17.4614 16.0475 17.4614 15.657 17.0709L14.9499 16.3638C14.5594 15.9732 14.5594 15.3401 14.9499 14.9496C15.3404 14.559 15.9736 14.559 16.3641 14.9496L17.0712 15.6567C17.4617 16.0472 17.4617 16.6804 17.0712 17.0709ZM5.05022 5.05037C5.44074 4.65984 5.44074 4.02668 5.05022 3.63615L4.34311 2.92905C3.95259 2.53852 3.31942 2.53852 2.9289 2.92905C2.53837 3.31957 2.53837 3.95274 2.9289 4.34326L3.636 5.05037C4.02653 5.44089 4.65969 5.44089 5.05022 5.05037Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function DarkThemeIcon(props: HTMLAttributes<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9ZM18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9ZM9 9C9 7.14929 10.0055 5.53343 11.5 4.66891C10.7646 4.24349 9.91072 4 9 4C6.23858 4 4 6.23858 4 9C4 11.7614 6.23858 14 9 14C9.91072 14 10.7646 13.7565 11.5 13.3311C10.0055 12.4666 9 10.8507 9 9Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function SystemThemeIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.34863 2.65063C7.2265 3.43403 6.31836 3.8102 5.67804 3.34262L4.21747 2.27608C3.84052 2.00079 3.32324 2.00026 2.9765 2.31279C2.74396 2.52238 2.5224 2.74394 2.31281 2.97649C2.00024 3.32323 2.00079 3.84049 2.27606 4.21749L3.34259 5.67802C3.81018 6.31834 3.43402 7.22649 2.65063 7.34863L0.863586 7.62725C0.4021 7.6992 0.0359497 8.06487 0.0120239 8.53128C0.00402832 8.68652 0 8.84279 0 9C0 9.15721 0.00402832 9.31348 0.0120239 9.46872C0.0359497 9.93513 0.4021 10.3008 0.863586 10.3727L2.65063 10.6514C3.43402 10.7735 3.81018 11.6817 3.34259 12.322L2.27606 13.7825C2.00079 14.1595 2.00024 14.6768 2.31281 15.0235C2.5224 15.2561 2.74396 15.4776 2.9765 15.6872C3.32324 15.9997 3.84052 15.9992 4.21747 15.7239L5.67804 14.6574C6.31836 14.1898 7.2265 14.566 7.34863 15.3494L7.62726 17.1364C7.69922 17.5979 8.06488 17.9641 8.53131 17.988C8.68652 17.996 8.84277 18 9 18C9.15723 18 9.31348 17.996 9.46875 17.988C9.93512 17.9641 10.3008 17.5979 10.3727 17.1364L10.6514 15.3494C10.7735 14.566 11.6816 14.1898 12.322 14.6574L13.7825 15.7239C14.1595 15.9992 14.6768 15.9997 15.0235 15.6872C15.256 15.4776 15.4776 15.2561 15.6872 15.0235C15.9998 14.6768 15.9992 14.1595 15.7239 13.7825L14.6574 12.322C14.1898 11.6817 14.566 10.7735 15.3494 10.6514L17.1364 10.3727C17.5979 10.3008 17.9641 9.93513 17.988 9.46872C17.996 9.31348 18 9.15721 18 9C18 8.84279 17.996 8.68652 17.988 8.53128C17.9641 8.06487 17.5979 7.6992 17.1364 7.62725L15.3494 7.34863C14.566 7.22649 14.1898 6.31834 14.6574 5.67802L15.7239 4.21749C15.9992 3.84049 15.9998 3.32323 15.6872 2.97649C15.4776 2.74394 15.256 2.52238 15.0235 2.31279C14.6768 2.00026 14.1595 2.00079 13.7825 2.27608L12.322 3.34262C11.6816 3.8102 10.7735 3.43403 10.6514 2.65063L10.3727 0.863571C10.3008 0.402119 9.93512 0.0359421 9.46875 0.012001C9.31348 0.00403214 9.15723 0 9 0C8.84277 0 8.68652 0.00403214 8.53125 0.012001C8.06488 0.0359421 7.69922 0.402119 7.62726 0.863571L7.34863 2.65063ZM9 12C10.6569 12 12 10.6569 12 9C12 7.34315 10.6569 6 9 6C7.34315 6 6 7.34315 6 9C6 10.6569 7.34315 12 9 12Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function CheckIcon({className}: {className?: string}) {
  return (
    <svg
      width="10"
      height="7"
      viewBox="0 0 10 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.70703 6.70703L9.70703 1.70703C10.0977 1.31641 10.0977 0.683105 9.70703 0.292969C9.31641 -0.0976562 8.68359 -0.0976562 8.29297 0.292969L4 4.58545L1.70703 2.29297C1.31641 1.90234 0.683594 1.90234 0.292969 2.29297C0.117188 2.46875 0.0205078 2.69434 0.00292969 2.9248C-0.0185547 3.20508 0.078125 3.49268 0.292969 3.70703L3.29297 6.70703C3.68359 7.09766 4.31641 7.09766 4.70703 6.70703Z"
        fill="currentColor"
      />
    </svg>
  );
}
