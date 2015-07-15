Applications = new Meteor.Collection('applications');

ApplicationsSchema = {
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
  deleted: {
    type: Boolean,
    label: 'Deleted',
    defaultValue: false
  },
  other: {
    type: [Object],
    optional: true
  },
  'other.$.question': {
    type: String,
    label: 'Question'
  },
  'other.$.answer': {
    type: String,
    label: 'Question'
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

StateMachine.defineStates(Applications, ApplicationsSchema, {
  states: ['accepted', 'rejected', 'hold' ],
  default: 'hold'
});

Applications.attachSchema(ApplicationsSchema);

Applications.onAcceptedState = function(obj) {
  console.log('accepted', obj);
};

Applications.onRejectedState = function(obj) {
  console.log('rejected', obj);
};

Applications.onHoldState = function(obj) {
  console.log('hold', obj);
};

Meteor.methods({
  acceptApplication: function(id) {
    Applications.toAcceptedState({ _id: id });

    var application = Applications.findOne(id);

    return Apprentices.insert({
      name: application.name,
      email: application.email,
      phoneNumber: application.phoneNumber,
      pictureUrl: application.pictureUrl,
      startedAt: new Date,
      endedAt: new Date + 7 * 10
    });
  },
  rejectApplication: function(id) {
    return Applications.toRejectedState({ _id: id });
  },
  deleteApplication: function(id) {
    return Applications.update(
      { _id: id },
      { $set: { deleted: true }}
    );
  }
});
