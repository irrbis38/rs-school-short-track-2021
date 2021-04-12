/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  domains.forEach((d) => {
    const domainParts = d.split('.').reverse();
    let stor = '';
    domainParts.forEach((path) => {
      stor = `${stor}.${path}`;
      if (result[stor]) {
        result[stor] = ++result[stor];
      } else {
        result[stor] = 1;
      }
    });
  });
  return result;
}

module.exports = getDNSStats;
