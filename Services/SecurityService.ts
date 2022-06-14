import Axios from "axios";

export class SecurityApi 
{

    url = ""

    Connect = async() => {
        let result = await Axios({
            method: 'post',
            url: this.url,
            headers: {

            },
            data: {

            }
        }).catch((er) => {
            console.log(er);
        })

        return result
    }

}