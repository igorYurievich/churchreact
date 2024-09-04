const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.getImageUrl = functions.https.onCall(async (data) => {
  const bucket = admin.storage().bucket();
  const file = bucket.file(data.path);

  try {
    const [exists] = await file.exists();
    if (!exists) {
      throw new Error('File does not exist');
    }

    const [url] = await file.getSignedUrl({
        action: 'read',
        expires: Date.now() + 10 * 1000,
      });

    return { url };
  } catch (error) {
    throw new functions.https.HttpsError('internal', 'Unable to generate URL', error.message);
  }
});
/* СОЗДАНО ДИНАМИЧЕСКОЕ ОБНОВЛЕНИЕ URL КОТОРОЕ СБРАСЫВАЕТ ССЫЛКУ НА ФОТО ЧЕРЕЗ 10 СЕК ОГРАНИЧИВАЯ ВОЗМОЖНОСТЬ ПОЛУЧЕНИЯ ИНФОРМАЦИИ О ИЗОБРАЖЕНИИ" */