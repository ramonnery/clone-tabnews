function status(request, response) {
  response.status(200).json({ chave: "o ramon é demais!" });
}

export default status;
