import { box, color, header } from '@constants/theme'

export default function HeaderStyleTag() {
  return (
    <style jsx>{`
      .header {
        width: ${box.paddingWidth};
        height: ${header.height};

        display: flex;
        justify-content: flex-start;
        align-items: center;

        position: fixed;
        top: 0;
        left: 0;
        z-index: 9;

        padding: 0px ${box.padding};

        background-color: ${color.white};
        color: ${color.black};
      }

      .header-main {
        justify-content: flex-end;

        background-color: ${color.main};
        color: ${color.white};
      }

      .header-qrcode {
        justify-content: center;
      }
    `}</style>
  )
}
