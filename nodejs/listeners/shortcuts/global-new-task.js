const { User, Task } = require('../../models')
const { modals } = require('../../block-kit')

module.exports = app => {
    app.shortcut('global_new_task', async ({ shortcut, ack, client }) => {
        try {
            await ack();
            await client.views.open({
                trigger_id: shortcut.trigger_id,
                view: modals.newTaskModal()
            });
            console.log('global_new_task called')
        } catch (error) {
            console.error(error);
        }
    });
};