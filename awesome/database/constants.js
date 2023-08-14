const TABLES = {
  ORGANIZATION: 'Organization',
  USER: 'User',
  CERTIFICATE: 'Certificate',
  COURSE: 'Course',
  BOOK: 'Book',
  TUTORIAL: 'Tutorial',
  TAG: 'Tag',
  COURSETAGS: 'CourseTags',
  COURSEORGANIZATIONS: 'CourseOrganizations',
  USERCOURSES: 'UserCourses',
}

async function alterTable(knex, tableName, tableBuilderFunction) {
  try {
      await knex.schema.alterTable(tableName, tableBuilderFunction);
      console.log(`Table "${tableName}" altered successfully.`);
  } catch (error) {
      console.error("Error altering table:", error);
  } finally {
  }
}

module.exports = {
  TABLES,
  alterTable
};