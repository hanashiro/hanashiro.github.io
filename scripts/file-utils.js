const fs = require('fs'),
    path = require('path');

const PICTURES_FOLDER = path.resolve(__dirname, '../public/img/content'),
    PICTURES_FOLDER_NAME = 'content',
    THUMBNAILS_FOLDER_NAME = 'content-thumb';

const Folders = {
    flatten(lists) {
        return lists.reduce((a, b) => a.concat(b), []);
    },

    getDirectories(srcpath) {
        return fs
            .readdirSync(srcpath)
            .map((file) => path.join(srcpath, file))
            .filter((path) => fs.statSync(path).isDirectory());
    },

    getDirectoriesRecursive(srcpath) {
        return [
            srcpath,
            ...Folders.flatten(
                Folders.getDirectories(srcpath).map(
                    Folders.getDirectoriesRecursive
                )
            ),
        ];
    },

    createDirectory(dirName) {
        if (!fs.existsSync(dirName)) {
            fs.mkdirSync(dirName);
        }
    },

    syncFoldersStructure(base, oldName, newName) {
        Folders.getDirectoriesRecursive(base).forEach((folder) => {
            Folders.createDirectory(folder.replace(oldName, newName));
        });
    },

    getFiles(dirPath) {
        files = fs.readdirSync(dirPath);

        arrayOfFiles = [];
        files.forEach(function (file) {
            if (!fs.statSync(dirPath + '/' + file).isDirectory()) {
                arrayOfFiles.push(path.join(dirPath, '/', file));
            }
        });

        return arrayOfFiles;
    },

    writeFile(fileName, data) {
        fs.writeFile(path.resolve(__dirname, fileName), data, function (err) {
            if (err) return console.log(err);
        });
    },
};

module.exports = {
    PICTURES_FOLDER,
    PICTURES_FOLDER_NAME,
    THUMBNAILS_FOLDER_NAME,
    Folders,
};
