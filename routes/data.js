
const userRoutes = (app, fs) => {
    
    const dir = './data'    
    // const dataPath = './data/2020/02/02/mochawesome.json';
    
    const readFile = (callback, returnJson = false, filePath = dataPath, encoding = 'utf8') => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                throw err;
            }

            callback(returnJson ? JSON.parse(data) : data);
        });
    };

    function getFiles (dir, files_){
        files_ = files_ || [];
        var files = fs.readdirSync(dir);
        for (var i in files){
            var name = dir + '/' + files[i];
            if (fs.statSync(name).isDirectory()){
                getFiles(name, files_);
            } else {
                files_.push(name);
            }
        }
        return files_;
    }

    // Access-Control-Allow-Origin
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        next();
      });

    // GET all data  
    app.get('/data', (req, res) => {
            res.send(getFiles(dir));
    });

    // GET one file
    app.get('/file/:year/:month/:day/:hour/:minute', (req, res) => {
        // const dataPathNew = './data/2020/02/02/mochawesome.json';
        var year = req.params.year
        var month = req.params.month
        var day = req.params.day
        var hour = req.params.hour
        var minute = req.params.minute

        const filename = `./data/${year}/${month}/${day}/${hour}/${minute}/mochawesome.json`

        console.log("##############")
        console.log(filename)
                
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) {
                res.send('File do not exist!');
            }

            res.send(JSON.parse(data));
        });
    });

};

module.exports = userRoutes;