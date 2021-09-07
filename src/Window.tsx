import React from "react";

export interface WindowProps {
    title: string;
    className?: string;
}

export class Window extends React.Component<WindowProps> {
    render() {
        const { className, children, title } = this.props;
        return (
            <div className={`Window ${className}`}>
                <div className="Taskbar">
                    <div className="Title">
                        {title}
                    </div>
                </div>
                <div className="Content">
                    {children}
                </div>
            </div>
        );
    }
}