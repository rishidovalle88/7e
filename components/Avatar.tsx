import React from 'react'

interface AvatarProps {
    firstname: string;
    lastname: string;
}

const Avatar = ({ firstname, lastname }: AvatarProps) => {
    return (
        <div className="has-text-centered" style={{
            // marginTop: "-85px",
        }}>
            <img src="https://placehold.it/110x110"
                style={{
                    width: "110px",
                    borderRadius: "50%",
                }}
            />
            <h1 className="title">
                {firstname}
            </h1>
            <h2 className="subtitle">
                {lastname}
            </h2>
        </div>
    )
}

export default Avatar
