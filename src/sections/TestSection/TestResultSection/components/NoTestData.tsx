import Container from "@/components/common/container"

function NoTestData() {
    return (
        <Container>
            <div className="p-6 screen-no-nav flex flex-col justify-center items-center rounded-lg">
                <h1 className="text-2xl font-bold">No Test Data Found</h1>
                <p className="text-gray-500">Please take a test to view the result</p>
            </div>
        </Container>
    )
}

export default NoTestData