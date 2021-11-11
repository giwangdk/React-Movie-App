const apiConfig = {
    baseUrl: 'https://api.themovie.org/3/',
    apiKey : 'fb4680731533d11dfd2c691891d6c94e',
    originalImage : (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image : (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;