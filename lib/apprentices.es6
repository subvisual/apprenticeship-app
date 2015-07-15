Apprentices = new Meteor.Collection('apprentices');

ApprenticesSchema = {
  name: {
    type: String,
    label: 'Name'
  },
  email: {
    type: String,
    label: 'Email'
  },
  phoneNumber: {
    type: Number,
    label: 'Phone number'
  },
  pictureUrl: {
    type: String,
    label: 'Picture',
    optional: true
  },
  startedAt: {
    type: Date,
    label: 'Started at'
  },
  endedAt: {
    type: Date,
    label: 'Ended at'
  },
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date;
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date};
      } else {
        this.unset();
      }
    }
  }
};
