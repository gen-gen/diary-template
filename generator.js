const fs = require('fs-extra')
const path = require('path')
const moment = require('moment')

const filename = moment()
const DAYS = 365
const pwd = process.cwd()

for (let i = 0; i < DAYS; i++) {
  fs.ensureFile(path.join(pwd, 'diary',
    `${filename.format('YYYY/MM')}`,
    `${filename.format('YYYY-MM-DD')}.md`))
  filename.add(1, 'day')
}
