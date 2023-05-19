class VideoController {
  async course(req, res) {
    try {
      if (req.file !== null) {
        const path = req.file.path.split('/').pop();
        res.json({ message: `${process.env.API_IP}/videos/${path}`});
      } else {
        throw new Error('Нет файла!');
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

const videoController = new VideoController();

export default videoController;