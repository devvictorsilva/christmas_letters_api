import prismaService from "../database/prisma.service";

class CodeController {

  constructor() {}

  async sendCode(req: any, res: any) {
    try {
      const code = await prismaService.code.findFirst({
        where: {
          code_name: req.body.code,
        },
      })
      console.log(req)
      console.log(code);

      if (!code) {
        return res.status(404).json(code);
      } else {
        const letter = await prismaService.letter.findFirst({
          where: {
            codeId: code.id,
          },
          select: {
            id: true
          }
        })

        return res.status(200).json(letter);
      }
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  async createCode(req: any, res: any) {
    try {
      const code = await prismaService.code.create({
        data: {
          code_name: req.body.code_name,
        },
      })

      return res.status(201).json(code);
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

}

export default CodeController;