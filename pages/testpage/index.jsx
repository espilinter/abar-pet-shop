import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Image from "next/image";
import box from "../../assets/image/box.png"
import categoryArrow from "../../assets/image/categoryArrow.png"
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

// Modal.setAppElement('#yourAppElement');

const testpage = () => {

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="min-h-[500px]">
            <button onClick={openModal}>Open Modal</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className={` bg-white w-[826px] h-426 px-40 py-32 flex justify-start cursor-default transition-all duration-200 `}>
                    <ul className="border-l-2 border-l-[#6E6E6E] w-230 text-[#1E1E1E] font-bold flex flex-col gap-12">
                        <li className="w-196 h-40 flex items-center justify-between p-8"><span className="flex items-center gap-x-4"><Image src={box} className="h-24" /><span>دسته‌بندی 1</span></span><Image src={categoryArrow} className="h-24" /></li>
                        <li className="w-196 h-40 flex items-center justify-between p-8"><span className="flex items-center gap-x-4"><Image src={box} className="h-24" /><span>دسته‌بندی 1</span></span><Image src={categoryArrow} className="h-24" /></li>
                        <li className="w-196 h-40 flex items-center justify-between p-8"><span className="flex items-center gap-x-4"><Image src={box} className="h-24" /><span>دسته‌بندی 1</span></span><Image src={categoryArrow} className="h-24" /></li>
                        <li className="w-196 h-40 flex items-center justify-between p-8"><span className="flex items-center gap-x-4"><Image src={box} className="h-24" /><span>دسته‌بندی 1</span></span><Image src={categoryArrow} className="h-24" /></li>
                        <li className="w-196 h-40 flex items-center justify-between p-8"><span className="flex items-center gap-x-4"><Image src={box} className="h-24" /><span>دسته‌بندی 1</span></span><Image src={categoryArrow} className="h-24" /></li>
                        <li className="w-196 h-40 flex items-center justify-between p-8"><span className="flex items-center gap-x-4"><Image src={box} className="h-24" /><span>دسته‌بندی 1</span></span><Image src={categoryArrow} className="h-24" /></li>
                        <li className="w-196 h-40 flex items-center justify-between p-8"><span className="flex items-center gap-x-4"><Image src={box} className="h-24" /><span>دسته‌بندی 1</span></span><Image src={categoryArrow} className="h-24" /></li>
                        <li className="w-196 h-40 flex items-center justify-between p-8"><span className="flex items-center gap-x-4"><Image src={box} className="h-24" /><span>دسته‌بندی 1</span></span><Image src={categoryArrow} className="h-24" /></li>
                    </ul>
                    <ul className="grid grid-cols-3 gap-x-60 text-[#1E1E1E]">
                        <li>
                            <h4 className="font-bold text-16">دسته‌بندی سطح 2</h4>
                            <ul className="text-[#6E6E6E] text-14 font-normal">
                                <li>دسته‌بندی سطح 3</li>
                                <li>دسته‌بندی سطح 3</li>
                                <li>دسته‌بندی سطح 3</li>
                                <li>دسته‌بندی سطح 3</li>
                            </ul>
                        </li>
                        <li>
                            <h4 className="font-bold text-16">دسته‌بندی سطح 2</h4>
                            <ul className="text-[#6E6E6E] text-14 font-normal">
                                <li>دسته‌بندی سطح 3</li>
                                <li>دسته‌بندی سطح 3</li>
                                <li>دسته‌بندی سطح 3</li>
                                <li>دسته‌بندی سطح 3</li>
                            </ul>
                        </li>
                        <li>
                            <h4 className="font-bold text-16">دسته‌بندی سطح 2</h4>
                            <ul className="text-[#6E6E6E] text-14 font-normal">
                                <li>دسته‌بندی سطح 3</li>
                                <li>دسته‌بندی سطح 3</li>
                                <li>دسته‌بندی سطح 3</li>
                                <li>دسته‌بندی سطح 3</li>
                            </ul>
                        </li>
                        <li>
                            <h4 className="font-bold text-16">دسته‌بندی سطح 2</h4>
                            <ul className="text-[#6E6E6E] text-14 font-normal">
                                <li>دسته‌بندی سطح 3</li>
                                <li>دسته‌بندی سطح 3</li>
                                <li>دسته‌بندی سطح 3</li>
                                <li>دسته‌بندی سطح 3</li>
                            </ul>
                        </li>
                        <li>
                            <h4 className="font-bold text-16">دسته‌بندی سطح 2</h4>
                            <ul className="text-[#6E6E6E] text-14 font-normal">
                                <li>دسته‌بندی سطح 3</li>
                                <li>دسته‌بندی سطح 3</li>
                                <li>دسته‌بندی سطح 3</li>
                                <li>دسته‌بندی سطح 3</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </Modal>
        </div>
    );
}

export default testpage;