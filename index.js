var db;

$(document).ready(function() {
  console.log('ready');
  // initialize db
  $.get('database.json', function(data) {
    db = {
      units: data.units,
      classes: data.classes
    };
  });

  // ui
  $('#unit-selection').dropdown({
    onChange: function(value) {
      console.log(value);
      buildTable(value);
    }
  });
});

function buildTable(unit) {
  var $tableBody = $('#my-table-body');
  $tableBody.text('');
  
  var myUnit = db.units[unit]
  var startingClass = myUnit.class;
  $tableBody.append(buildClassNameRow(db.classes[startingClass].name));
  $tableBody.append(buildStatsRow(myUnit.level, myUnit.stats));

  myUnit.growth
}

function buildClassNameRow(className) {
  return $(`<tr><td class="center aligned" colspan="10"><strong>${className}</strong></td></tr>`);
}

function buildStatsRow(level, stats) {
  return $(`<tr><td>${level}</td><td>${stats.hp}</td><td>${stats.str}</td><td>${stats.mag}</td><td>${stats.dex}</td><td>${stats.spd}</td><td>${stats.lck}</td><td>${stats.def}</td><td>${stats.res}</td><td>${stats.bld}</td></tr>`);
}

function getCombinedGrowth(stats1, stats2) {
  return {
    hp: stats1.hp + stats2.hp,
    str: stats1.str + stats2.str,
    mag: stats1.mag + stats2.mag,
    dex: stats1.dex + stats2.dex,
    spd: stats1.spd + stats2.spd,
    lck: stats1.lck + stats2.lck,
    def: stats1.def + stats2.def,
    res: stats1.res + stats2.res,
    bld: stats1.bld + stats2.bld,
  };
}