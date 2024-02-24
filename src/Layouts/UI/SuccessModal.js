// import React, { useEffect, useState } from 'react';
// import { Modal, ModalContent, IconSvg, SuccessMessage, Countdown, BottomCloseButton } from '../../Assets/Styles/UI/SuccessModal.styles';

// const SuccessModal = ({
//     isOpen, 
//     onRequestClose, 
//     content,
//     position='center',
//     width = "250px",
//     height = "250px",
//     icon = "check" // domyślna wartość 'check'; może przyjmować wartości 'check' lub 'x'
// }) => {
//     const [countdown, setCountdown] = useState(5);

//     useEffect(() => {
//         if (!isOpen) return;

//         setCountdown(5);

//         const timer = setTimeout(onRequestClose, 5000);

//         const interval = setInterval(() => {
//             setCountdown(prev => {
//                 if (prev <= 1) {
//                     clearInterval(interval);
//                     return 0;
//                 }
//                 return prev - 1;
//             });
//         }, 1000);

//         return () => {
//             clearTimeout(timer);
//             clearInterval(interval);
//         };
//     }, [isOpen, onRequestClose]);

//     const renderIcon = () => {
//         if (icon === "check") {
//             return (
//                 <IconSvg viewBox="0 0 50 50">
//                     <circle cx="25" cy="25" r="23.5"></circle>
//                     <path d="M14 27l7 7 15-15"></path>
//                 </IconSvg>
//             );
//         } else if (icon === "x") {
//             return (
//                 <IconSvg viewBox="0 0 50 50">
//                     <circle cx="25" cy="25" r="23.5"></circle>
//                     <path d="M17 17l16 16M33 17l-16 16"></path>
//                 </IconSvg>
//             );
//         }
//     };

//     if (!isOpen) return null;

//     return (
//         <Modal onClick={onRequestClose}>
//             <ModalContent onClick={e => e.stopPropagation()} width={width} height={height}>
//                 <Countdown>{countdown}</Countdown>
//                 {renderIcon()}
//                 <SuccessMessage>{content}</SuccessMessage>
//                 <BottomCloseButton onClick={onRequestClose}>Zamknij</BottomCloseButton>
//             </ModalContent>
//         </Modal>
//     );
// };

// export default SuccessModal;

import React, { useEffect, useState } from 'react';
import { Modal, ModalContent, IconSvg, SuccessMessage, Countdown, BottomCloseButton } from '../../Assets/Styles/UI/SuccessModal.styles';

const SuccessModal = ({
    isOpen, 
    onRequestClose,
    contentStyle = {},
    children,
    position='center',
    width = "250px",
    height = "250px",
    icon = "check"
}) => {
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        if (!isOpen) return;

        setCountdown(5);
        const timer = setTimeout(onRequestClose, 5000);

        const interval = setInterval(() => {
            setCountdown(prev => (prev <= 1) ? 0 : prev - 1);
        }, 1000);

        return () => {
            clearTimeout(timer);
            clearInterval(interval);
        };
    }, [isOpen, onRequestClose]);

    const renderIcon = () => {
        if (icon === "check") {
            return (
                <IconSvg viewBox="0 0 50 50">
                    <circle cx="25" cy="25" r="23.5"></circle>
                    <path d="M14 27l7 7 15-15"></path>
                </IconSvg>
            );
        } else if (icon === "x") {
            return (
                <IconSvg viewBox="0 0 50 50">
                    <circle cx="25" cy="25" r="23.5"></circle>
                    <path d="M17 17l16 16M33 17l-16 16"></path>
                </IconSvg>
            );
        }
    };

    if (!isOpen) return null;

    return (
        <Modal onClick={onRequestClose}>
            <ModalContent onClick={e => e.stopPropagation()} width={width} height={height}>
                <Countdown>{countdown}</Countdown>
                {renderIcon()}
                <SuccessMessage style={contentStyle}>{children}</SuccessMessage>
                <BottomCloseButton onClick={onRequestClose}>Zamknij</BottomCloseButton>
            </ModalContent>
        </Modal>
    );
};

export default SuccessModal;



