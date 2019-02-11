/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
const subdomainVisits = cpdomains => {
  const count = {};
  cpdomains.forEach(cpdomain => {
    let [visit, domain] = cpdomain.split(' ');
    while (true) {
      if (count[domain]) {
        count[domain] += parseInt(visit);
      } else {
        count[domain] = parseInt(visit);
      }
      const splitIndex = domain.indexOf('.');
      if (splitIndex !== -1) {
        domain = domain.slice(splitIndex + 1);
      } else {
        break;
      }
    }
  });
  return Object.entries(count).map(([domain, count]) => `${count} ${domain}`);
};

console.log(subdomainVisits(['9001 discuss.leetcode.com']));
console.log(
  subdomainVisits(['900 google.mail.com', '50 yahoo.com', '1 intel.mail.com', '5 wiki.org']),
);
