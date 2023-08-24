const { createCourse } = require('./graphql/mutations.ts');
const { updateCourse } = require('./graphql/mutations.ts');
const { deleteCourse } = require('./graphql/mutations.ts');
const { getCourse } = require('./graphql/queries.ts');
const { listCourses } = require('./graphql/queries.ts');
const { createCourseTags } = require('./graphql/mutations.ts');
const { updateCourseTags } = require('./graphql/mutations.ts');
const { deleteCourseTags } = require('./graphql/mutations.ts');
const { getCourseTags } = require('./graphql/queries.ts');
const { listCourseTags } = require('./graphql/queries.ts');
const { createCourseOrganizations } = require('./graphql/mutations.ts');
const { updateCourseOrganizations } = require('./graphql/mutations.ts');
const { deleteCourseOrganizations } = require('./graphql/mutations.ts');
const { getCourseOrganizations } = require('./graphql/queries.ts');
const { listCourseOrganizations } = require('./graphql/queries.ts');
const { createUserCourses } = require('./graphql/mutations.ts');
const { updateUserCourses } = require('./graphql/mutations.ts');
const { deleteUserCourses } = require('./graphql/mutations.ts');
const { getUserCourses } = require('./graphql/queries.ts');
const { listUserCourses } = require('./graphql/queries.ts');
const { createUser } = require('./graphql/mutations.ts');
const { updateUser } = require('./graphql/mutations.ts');
const { deleteUser } = require('./graphql/mutations.ts');
const { getUser } = require('./graphql/queries.ts');
const { listUsers } = require('./graphql/queries.ts');
const { createTag } = require('./graphql/mutations.ts');
const { updateTag } = require('./graphql/mutations.ts');
const { deleteTag } = require('./graphql/mutations.ts');
const { getTag } = require('./graphql/queries.ts');
const { listTags } = require('./graphql/queries.ts');
const { createOrganization } = require('./graphql/mutations.ts');
const { updateOrganization } = require('./graphql/mutations.ts');
const { deleteOrganization } = require('./graphql/mutations.ts');
const { getOrganization } = require('./graphql/queries.ts');
const { listOrganizations } = require('./graphql/queries.ts');
const { createTutorial } = require('./graphql/mutations.ts');
const { updateTutorial } = require('./graphql/mutations.ts');
const { deleteTutorial } = require('./graphql/mutations.ts');
const { getTutorial } = require('./graphql/queries.ts');
const { listTutorials } = require('./graphql/queries.ts');
const { createTutorialTags } = require('./graphql/mutations.ts');
const { updateTutorialTags } = require('./graphql/mutations.ts');
const { deleteTutorialTags } = require('./graphql/mutations.ts');
const { getTutorialTags } = require('./graphql/queries.ts');
const { listTutorialTags } = require('./graphql/queries.ts');
const { createUserTutorials } = require('./graphql/mutations.ts');
const { updateUserTutorials } = require('./graphql/mutations.ts');
const { deleteUserTutorials } = require('./graphql/mutations.ts');
const { getUserTutorials } = require('./graphql/queries.ts');
const { listUserTutorials } = require('./graphql/queries.ts');
const syncOperations = require('./utils');
const fs = require('fs');
const path = require('path');

let amplifyConfig;
const configFilePath = path.join(__dirname, './.config.development.json');
if (fs.existsSync(configFilePath)) {
    amplifyConfig = require(configFilePath);
} else {
    amplifyConfig = {
        aws_project_region: process.env.AWS_PROJECT_REGION,
        aws_appsync_graphqlEndpoint: process.env.AWS_APPSYNC_GRAPHQLENDPOINT,
        aws_appsync_region: process.env.AWS_APPSYNC_REGION,
        aws_appsync_authenticationType: process.env.AWS_APPSYNC_AUTHENTICATIONTYPE,
        aws_cognito_identity_pool_id: process.env.AWS_COGNITO_IDENTITY_POOL_ID,
        aws_cognito_region: process.env.AWS_COGNITO_REGION,
        aws_user_pools_id: process.env.AWS_USER_POOLS_ID,
        aws_user_pools_web_client_id: process.env.AWS_USER_POOLS_WEB_CLIENT_ID,
        aws_cognito_signup_attributes: process.env.AWS_COGNITO_SIGNUP_ATTRIBUTES,
    };
}
const email = process.env.EMAIL;
const password = process.env.PASSWORD;
const courseFields = [
    'title', 'source', 'description', 'cover', 'objectives',
    'syllabus', 'price', 'cost', 'topic', 'duration',
    'type', 'hasCert', 'language', 'level', 'license', 'publishedAt'
];
const tutorialFields = [
    'title', 'source', 'description', 'objectives', 'prerequisites', 'references',
    'syllabus', 'price', 'cost', 'topic', 'language', 'level', 'publishedAt'
];
const tagFields = ['name', 'description'];
const organizationFields = ['name', 'source', 'description', 'logo'];
const userFields = ['name', 'source', 'bio', 'title', 'email',
    'phoneNumber', 'birth', 'gender', 'profession', 'nickname', 'portrait'];
const userCourseFields = ['userId', 'courseId'];
const courseTagsFields = ['courseId', 'tagId'];
const courseOrganizationsFields = ['courseId', 'organizationId'];
const userTutorialsFields = ['tutorialId', 'userId'];
const tutorialTagsFields = ['tutorialId', 'tagId'];

async function main() {
    await syncOperations.amplifyConfig(amplifyConfig);
    await syncOperations.signIn(email, password);
    await syncOperations.sync(
        listCourses,
        'listCourses',
        createCourse,
        'createCourse',
        getCourse,
        'getCourse',
        updateCourse,
        'updateCourse',
        deleteCourse,
        'deleteCourse',
        'Course',
        courseFields);

    await syncOperations.sync(
        listTutorials,
        'listTutorials',
        createTutorial,
        'createTutorial',
        getTutorial,
        'getTutorial',
        updateTutorial,
        'updateTutorial',
        deleteTutorial,
        'deleteTutorial',
        'Tutorial',
        tutorialFields);

    await syncOperations.sync(
        listTags,
        'listTags',
        createTag,
        'createTag',
        getTag,
        'getTag',
        updateTag,
        'updateTag',
        deleteTag,
        'deleteTag',
        'Tag',
        tagFields
    );

    await syncOperations.sync(
        listOrganizations,
        'listOrganizations',
        createOrganization,
        'createOrganization',
        getOrganization,
        'getOrganization',
        updateOrganization,
        'updateOrganization',
        deleteOrganization,
        'deleteOrganization',
        'Organization',
        organizationFields
    );

    await syncOperations.sync(
        listUsers,
        'listUsers',
        createUser,
        'createUser',
        getUser,
        'getUser',
        updateUser,
        'updateUser',
        deleteUser,
        'deleteUser',
        'User',
        userFields
    );

    await syncOperations.sync(
        listUserCourses,
        'listUserCourses',
        createUserCourses,
        'createUserCourses',
        getUserCourses,
        'getUserCourses',
        updateUserCourses,
        'updateUserCourses',
        deleteUserCourses,
        'deleteUserCourses',
        'UserCourses',
        userCourseFields
    );

    await syncOperations.sync(
        listCourseTags,
        'listCourseTags',
        createCourseTags,
        'createCourseTags',
        getCourseTags,
        'getCourseTags',
        updateCourseTags,
        'updateCourseTags',
        deleteCourseTags,
        'deleteCourseTags',
        'CourseTags',
        courseTagsFields
    );

    await syncOperations.sync(
        listCourseOrganizations,
        'listCourseOrganizations',
        createCourseOrganizations,
        'createCourseOrganizations',
        getCourseOrganizations,
        'getCourseOrganizations',
        updateCourseOrganizations,
        'updateCourseOrganizations',
        deleteCourseOrganizations,
        'deleteCourseOrganizations',
        'CourseOrganizations',
        courseOrganizationsFields
    );

    await syncOperations.sync(
        listUserTutorials,
        'listUserTutorials',
        createUserTutorials,
        'createUserTutorials',
        getUserTutorials,
        'getUserTutorials',
        updateUserTutorials,
        'updateUserTutorials',
        deleteUserTutorials,
        'deleteUserTutorials',
        'UserTutorials',
        userTutorialsFields
    );

    await syncOperations.sync(
        listTutorialTags,
        'listTutorialTags',
        createTutorialTags,
        'createTutorialTags',
        getTutorialTags,
        'getTutorialTags',
        updateTutorialTags,
        'updateTutorialTags',
        deleteTutorialTags,
        'deleteTutorialTags',
        'TutorialTags',
        tutorialTagsFields
    );
}
main();