import { statfs } from 'fs'
function checkDiskSpace(pathToCheck, callback) {
    statfs(pathToCheck, (err, stats) => {
        if (err) {
            return callback(err);
        }

        const availableSpaceForUser = stats.bsize * stats.bavail;
				const totalSpace = stats.bsize * stats.blocks;

        callback(null, {
					total : totalSpace,
					free : availableSpaceForUser,
        });
    });
}

const path = '/';
checkDiskSpace(path, (err, space) => {
    if (err) {
        console.error('Error checking disk space:', err);
    } else {
			console.log('Total space:', space.total);
			console.log('Free space:', space.free);
    }
});

