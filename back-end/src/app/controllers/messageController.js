export function messagem(req, res) {
    return res.status(200).json({ message: 'AI Support Assistant API is running!' })
}