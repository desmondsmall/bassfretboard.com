export const Fieldset = ({ children, name }) => {
    return (
        <>

            <fieldset className="">
                <legend className="">{name}</legend>
                {children}
            </fieldset>
        </>
    )
}