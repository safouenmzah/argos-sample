/**
 * Created by argos-sample.
 * User: jhershauer
 * Date: 4/15/11
 * Time: 12:35 PM
 * To change this template use File | Settings | File Templates.
 */
define('configuration/sample/production', ['configuration/production', 'Mobile/Sample/ApplicationModule'], function(baseConfiguration) {
    return mergeConfiguration(baseConfiguration, {
        modules: [
            new Mobile.Sample.ApplicationModule()
        ]
    });
});