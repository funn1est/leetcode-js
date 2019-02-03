/**
 * @param {string[]} emails
 * @return {number}
 */
const numUniqueEmails = emails => {
  const resultSet = new Set(
    emails.map(email => {
      const [local, domain] = email.split('@');
      const localResult = local.replace(/(\.)|(\+.*)/g, '');
      return `${localResult}@${domain}`;
    }),
  );
  return resultSet.size;
};

console.log(
  numUniqueEmails([
    'test.email+alex@leetcode.com',
    'test.e.mail+bob.cathy@leetcode.com',
    'testemail+david@lee.tcode.com',
  ]),
);
