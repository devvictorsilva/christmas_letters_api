import prismaService from "../database/prisma.service";

class LetterController {
  constructor() {}

  async createLetter(req: any, res: any) {
    try {
      const letter = await prismaService.letter.create({
        data: {
          letter_title: req.body.letter_title,
          letter_content: req.body.letter_content,
          codeId: req.body.code_id,
        },
      })
      return res.status(201).json(letter);
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  async getLetter(req: any, res: any) {
    try {
      const letter = await prismaService.letter.findUnique({
      where: {
        id: req.params.id,
      },
      select: {
        letter_title: true,
        letter_content: true,
      }
      })
      return res.status(200).json(letter);
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}

export default LetterController;