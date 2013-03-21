function(doc) {
  if (doc.type === "photo") {
    emit(doc._id, {
    	"number": doc.imgNum[1],
    	"subject": doc.subject[1],
    	"date": doc.date[1] 
    });
  }
};