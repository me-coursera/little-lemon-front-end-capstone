import React, { useRef } from "react";
import { useAlertContext } from "../context/alertContext";

/**
 * This is a global component that uses context to display a global alert message.
 */
function Alert() {
    const { isOpen, type, message, onClose } = useAlertContext();
    const cancelRef = useRef();
    const isSuccess = type === "success";

    if (!isOpen) return null;

    return (
        <div
            role="dialog"
            aria-modal="true"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1000,
            }}
            onClick={onClose}
        >
            <div
                role="document"
                style={{
                    backgroundColor: isSuccess ? "#81C784" : "#FF8A65",
                    padding: "2rem",
                    borderRadius: "8px",
                    minWidth: "300px",
                    maxWidth: "500px",
                    color: "white",
                    boxShadow: "0 0 10px rgba(0,0,0,0.3)",
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <h2 style={{ marginTop: 0 }}>
                    {isSuccess ? (
                        "All good!"
                    ) : (
                        <>
                            <span style={{ fontSize: "1.25rem" }}>
                                (simulated 50% chance of failure)
                            </span>
                            <br />
                            Oops!
                        </>
                    )}
                </h2>

                <p>{message}</p>
                <button
                    ref={cancelRef}
                    onClick={onClose}
                    style={{
                        marginTop: "1rem",
                        padding: "0.5rem 1rem",
                        backgroundColor: "white",
                        color: isSuccess ? "#388E3C" : "#D84315",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                    }}
                >
                    Close
                </button>
            </div>
        </div>
    );
}

export default Alert;
