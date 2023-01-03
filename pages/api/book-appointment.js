export default function handler(req, res){
    const {body, method} = req

    if(method !== 'POST') res.status(405).json('Request forbidden')
    else if(Object.values(body).includes('')) res.status(204).json('Empyt request body')
    else{
        const {full_name, phone, email, message} = body

        res.status(200).json('Appointment booked')
    }
}
