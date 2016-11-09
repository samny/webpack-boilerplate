function get(path) {
    return new Promise((resolve, reject) => {
        try {
            require(['resources/images' + path], (url)=>{
                var img = new Image();
                img.onload = () => {
                    resolve(img);
                };
                img.src = url;
            });
        } catch (err) {
            reject(err);
        }
    });
}

export default {
    get: get
}