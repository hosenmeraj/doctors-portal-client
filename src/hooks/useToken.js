import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('')

    useEffect(() => {
        const email = user?.user?.email
        const currentEmail = { email: email }
        if (user) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(currentEmail)
            })
                .then(res => res.json())
                .then(data => {
                    console.log("inside token", data)
                    const accessToken = data.token
                    localStorage.setItem('accessToken', accessToken)
                    setToken(accessToken)
                })
        }
    }, [user])
    return [token]
}
export default useToken;