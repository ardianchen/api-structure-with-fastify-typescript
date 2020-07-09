export const getCars = async (req: FastifyRequest, reply: FastifyReply<ServerResponse>) => {
// export const getCars = async (req: FastifyRequest, reply: FastifyReply<ServerResponse>): Promise<Document[]> => {
  try {
    // const cars = await Car.find()
    const cars = [{
      ab: 'a'
    }, {
      bc: 'b'
    }]
    return cars
  } catch (err) {
    // throw boom.boomify(err)
  }
}
