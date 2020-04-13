export const Stage_Width = 17
export const Stage_Height = 25

export const createStage = () =>
Array.from(Array(Stage_Width), () => 
new Array(Stage_Width).fill([0,'clear']))
