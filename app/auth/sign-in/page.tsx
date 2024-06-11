import Link from "next/link";

export default function Page() {
    const inputProps = [
        {
            label: "Email",
            type: "email"
        },
        {
            label: "Password",
            type: "password"
        }
    ]
    const inputList = inputProps.map((element, index) => {
        const { label, type } = element;
        return (
            <>
                <label className="col-span-3 text-right">{label} :</label><input type={type} className="col-span-9" />
            </>
        )
    })
    return (
        <div className="page-login w-full">
            <div className="card-login w-[500px] mx-auto mt-8 bg-gray-200 py-8 px-4 rounded-lg flex flex-col gap-4">
                <div className="grid grid-cols-12 gap-4 ">
                    {inputList}
                </div>
                <div className="flex justify-center">
                    <button className=" bg-green-600 text-white rounded-md px-4 py-2">Submit</button>
                </div>
                <div className="col-span-12 flex justify-between">
                    <Link className="col-span-6" href="/auth/sign-in/forgot-password">
                        You forgot password?
                    </Link>
                    <Link className="col-span-6" href="/auth/sign-up">
                        Didn't sign up?
                    </Link>
                </div>
            </div>
        </div>
    );
}
