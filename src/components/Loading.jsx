// Intial loading screen for the app
export default function Loading() {
    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <img src="loading.svg" alt="Loading..." height="80px" width="150px" />
        </div>
    )
}
