import { useEffect, useState } from "react";
import Modal from "../../components/ui/Modal";

export default function Modals(){

    // code show
    const [showCode, setShowCode] = useState({
        danger: false,
        warning: false,
        information: false,
        success: false,
        delete: false,
        deleteTwo: false,
        deleteSmall: false,
    });

    // handler code show
    const toggleCodeView = (style) => {
        setShowCode((prev) => ({
            ...prev,
            [style]: !prev[style]
        }));
    };

    // Aleart Close
    useEffect(() => {
        document.querySelectorAll(".close-button").forEach((button) => {
            button.addEventListener("click", function () {
            this.parentNode.classList.add("hidden");
            });
        });
    }, [])

    return (
        <>
        <div className="main-content group-data-[sidebar-size=lg]:xl:ml-[calc(theme('spacing.app-menu')_+_16px)] group-data-[sidebar-size=sm]:xl:ml-[calc(theme('spacing.app-menu-sm')_+_16px)] px-4 ac-transition">
            <div className="card">
                <h2 className="card-title">Modals Component</h2>
            </div>
            <div className="grid grid-cols-12 gap-4 card p-0 bg-transparent">
                 {/* Modal Danger */}
                <div className="col-span-4">
                    <div>
                        <div className="flex-center-between px-2 py-4 bg-white dark:bg-dark-card-two rounded-lg">
                            <h3 className="text-lg card-title leading-none">Danger Modal</h3>
                            <button type="button" onClick={() => toggleCodeView('danger')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.danger ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className="mt-1">
                            <div className={`${showCode.danger ? 'hidden':''}`}>
                                <Modal
                                border="danger-border-left"
                                modalType="danger"
                                modalTitle="Danger"
                                modalContent="This alert is created to display the relevant more information"
                                buttonleft="Decline"
                                buttonRight="Yes, Accept"
                                />
                            </div>
                        </div>
                         {/* Prism Code */}
                        <div className={`${showCode.danger ? 'card px-2 py-0':'hidden'} mt-1 shadow`}>
                            <pre>
                                <code className="language-markup">
{`<Modal
border="danger-border-left"
modalType="danger"
modalContent="This alert is created to display the relevant more information"
buttonleft="Decline"
buttonRight="Yes, Accept"
/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code */}
                    </div>
                </div>
                {/* Modal Warning */}
                <div className="col-span-4">
                    <div>
                        <div className="flex-center-between px-2 py-4 bg-white dark:bg-dark-card-two rounded-lg">
                            <h3 className="text-lg card-title leading-none">Warning Modal</h3>
                            <button type="button" onClick={() => toggleCodeView('warning')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.warning ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className="mt-1">
                            <div className={`${showCode.warning ? 'hidden':''}`}>
                            <Modal
                            border="warning-border-left"
                            modalType="warning"
                            modalTitle="Warning"
                            modalContent="This alert is created to display the relevant more information"
                            buttonleft="Decline"
                            buttonRight="Yes, Accept"
                            />
                            </div>
                        </div>
                         {/* Prism Code */}
                        <div className={`${showCode.warning ? 'card px-2 py-0':'hidden'} mt-1 shadow`}>
                            <pre>
                                <code className="language-markup">
{`<Modal
border="warning-border-left"
modalType="warning"
modalContent="This alert is created to display the relevant more information"
buttonleft="Decline"
buttonRight="Yes, Accept"
/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code */}
                    </div>
                </div>
                 {/* Modal Information */}
                <div className="col-span-4">
                    <div>
                        <div className="flex-center-between px-2 py-4 bg-white dark:bg-dark-card-two rounded-lg">
                            <h3 className="text-lg card-title leading-none">Infomational Modal</h3>
                            <button type="button" onClick={() => toggleCodeView('information')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.information ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className="mt-1">
                            <div className={`${showCode.information ? 'hidden':''}`}>
                                <Modal
                                border="info-border-left"
                                modalType="info"
                                modalTitle="Information"
                                modalContent="This alert is created to display the relevant more information"
                                buttonleft="Decline"
                                buttonRight="Yes, Accept"
                                />
                            </div>
                        </div>
                         {/* Prism Code */}
                        <div className={`${showCode.information ? 'card px-2 py-0':'hidden'} mt-1 shadow`}>
                            <pre>
                                <code className="language-markup">
{`<Modal
border="info-border-left"
modalType="info"
modalContent="This alert is created to display the relevant more information"
buttonleft="Decline"
buttonRight="Yes, Accept"
/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code */}
                    </div>
                </div>
                 {/* Modal Success */}
                <div className="col-span-4">
                    <div>
                        <div className="flex-center-between px-2 py-4 bg-white dark:bg-dark-card-two rounded-lg">
                            <h3 className="text-lg card-title leading-none">Success Modal</h3>
                            <button type="button" onClick={() => toggleCodeView('success')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.success ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className="mt-1">
                            <div className={`${showCode.success ? 'hidden':''}`}>
                                <Modal
                                border="success-border-left"
                                modalType="success"
                                modalTitle="Success"
                                modalContent="This alert is created to display the relevant more information"
                                buttonleft="Decline"
                                buttonRight="Yes, Accept"
                                />
                            </div>
                        </div>
                         {/* Prism Code */}
                        <div className={`${showCode.success ? 'card px-2 py-0':'hidden'} mt-1 shadow`}>
                            <pre>
                                <code className="language-markup">
{`<Modal
border="success-border-left"
modalType="success"
modalContent="This alert is created to display the relevant more information"
buttonleft="Decline"
buttonRight="Yes, Accept"
/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code */}
                    </div>
                </div>
                 {/* Modal Delete */}
                <div className="col-span-4">
                    <div>
                        <div className="flex-center-between px-2 py-4 bg-white dark:bg-dark-card-two rounded-lg">
                            <h3 className="text-lg card-title leading-none">Delete modal</h3>
                            <button type="button" onClick={() => toggleCodeView('delete')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.delete ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className="mt-1">
                            <div className={`${showCode.delete ? 'hidden':''}`}>
                                <Modal
                                border="delete-border-left"
                                modalType="delete"
                                modalTitle="Delete Account"
                                modalContent="This alert is created to display the relevant more information"
                                buttonleft="Yes, Delete!"
                                buttonRight="No, Keep It"
                                />
                            </div>
                        </div>
                         {/* Prism Code */}
                        <div className={`${showCode.delete ? 'card px-2 py-0':'hidden'} mt-1 shadow`}>
                            <pre>
                                <code className="language-markup">
{`<Modal
border="delete-border-left"
modalType="delete"
modalContent="This alert is created to display the relevant more information"
buttonleft="Yes, Delete!"
buttonRight="No, Keep It"
/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code */}
                    </div>
                </div>
                 {/* Modal Delete */}
                <div className="col-span-4">
                    <div>
                        <div className="flex-center-between px-2 py-4 bg-white dark:bg-dark-card-two rounded-lg">
                            <h3 className="text-lg card-title leading-none">Delete modal (Two)</h3>
                            <button type="button" onClick={() => toggleCodeView('deleteTwo')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.deleteTwo ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className="mt-1">
                            <div className={`${showCode.deleteTwo ? 'hidden':''}`}>
                                <Modal
                                border="delete-border-left"
                                modalType="delete"
                                modalContent="This alert is created to display the relevant more information"
                                buttonleft="Yes, Delete!"
                                buttonRight="No, Keep It"
                                deleteModalTwo
                                />
                            </div>
                        </div>
                         {/* Prism Code */}
                        <div className={`${showCode.deleteTwo ? 'card px-2 py-0':'hidden'} mt-1 shadow`}>
                            <pre>
                                <code className="language-markup">
{`<Modal
border="delete-border-left"
modalType="delete"
modalContent="This alert is created to display the relevant more information"
buttonleft="Yes, Delete!"
buttonRight="No, Keep It"
deleteModalTwo
/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code */}
                    </div>
                </div>
                 {/* Modal Delete Small */}
                <div className="col-span-4">
                    <div>
                        <div className="flex-center-between px-2 py-4 bg-white dark:bg-dark-card-two rounded-lg">
                            <h3 className="text-lg card-title leading-none">Delete modal (small)</h3>
                            <button type="button" onClick={() => toggleCodeView('deleteSmall')} className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon">
                                <span className="shrink-0">View Code</span>
                                <i className={`${showCode.deleteSmall ? 'ri-code-s-slash-line': 'ri-code-line'} text-inherit text-[15px]`}></i>
                            </button>
                        </div>
                        <div className="mt-1">
                            <div className={`${showCode.deleteSmall ? 'hidden':''}`}>
                                <Modal
                                border="delete-border-left"
                                modalType="normal"
                                modalTitle="Delete Account"
                                modalContent="This alert is created to display the relevant more information"
                                buttonleft="Yes, Delete!"
                                buttonRight="No, Keep It"
                                deleteModalSmall
                                />
                            </div>
                        </div>
                         {/* Prism Code */}
                        <div className={`${showCode.deleteSmall ? 'card px-2 py-0':'hidden'} mt-1 shadow`}>
                            <pre>
                                <code className="language-markup">
{`<Modal
border="delete-border-left"
modalType="normal"
modalTitle="Delete Account"
modalContent="This alert is created to display the relevant more information"
buttonleft="Yes, Delete!"
buttonRight="No, Keep It"
deleteModalSmall
/>`}
                                </code>
                            </pre>
                        </div>
                         {/* Prism Code */}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}