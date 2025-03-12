// JavaScript source code
cloudinary.url().transformation(new Transformation()
    .aspectRatio("1.0").gravity("auto").width(867).crop("fill").chain()
    .quality("auto").chain()
    .fetchFormat("auto")).imageTag("hiking_dog_mountain.jpg")