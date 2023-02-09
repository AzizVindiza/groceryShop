import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={270}
        height={340}
        viewBox="0 0 270 340"
        backgroundColor="#e8e8e8"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="19" y="12" rx="0" ry="0" width="251" height="118" />
        <rect x="16" y="105" rx="0" ry="0" width="6" height="11" />
        <rect x="23" y="141" rx="0" ry="0" width="51" height="25" />
        <rect x="24" y="175" rx="0" ry="0" width="48" height="14" />
        <rect x="214" y="139" rx="0" ry="0" width="52" height="24" />
        <rect x="215" y="172" rx="0" ry="0" width="52" height="14" />
        <rect x="23" y="200" rx="0" ry="0" width="255" height="49" />
        <rect x="24" y="259" rx="0" ry="0" width="97" height="21" />
        <rect x="24" y="292" rx="0" ry="0" width="252" height="37" />
        <rect x="188" y="309" rx="0" ry="0" width="8" height="1" />
    </ContentLoader>
)

export default Skeleton