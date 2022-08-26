const thumb = require('node-thumbnail').thumb,
    {
        PICTURES_FOLDER,
        PICTURES_FOLDER_NAME,
        THUMBNAILS_FOLDER_NAME,
        Folders,
    } = require('./file-utils');

Folders.syncFoldersStructure(
    PICTURES_FOLDER,
    PICTURES_FOLDER_NAME,
    THUMBNAILS_FOLDER_NAME
);
const foldersList = Folders.getDirectoriesRecursive(PICTURES_FOLDER);

foldersList.forEach((folder) => {
    thumb(
        {
            source: folder, // could be a filename: dest/path/image.jpg
            destination: folder.replace(
                PICTURES_FOLDER_NAME,
                THUMBNAILS_FOLDER_NAME
            ),
            width: 490,
            skip: true,
            ignore: true,
            prefix: '',
            suffix: '',
        },
        function (files, err, stdout, stderr) {
            console.log('All done!');
        }
    )
        .then(function () {
            console.log('Success');
        })
        .catch(function (e) {
            console.log('Error', e.toString());
        });
});
