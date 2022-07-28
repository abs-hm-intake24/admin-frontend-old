'use strict';

var _ = require('underscore');

module.exports = function () {
    var l = [
        {
            id: 'one_inch_pieces',
            name: 'inch pieces'
        },

        {
            id: 'six_inch_sub_rolls',
            name: '6 inch sub rolls'
        },

        {
            id: 'twelve_inch_sub_rolls',
            name: '12 inch sub rolls'
        },

        {
            id: 'anchovies',
            name: 'anchovies'
        },

        {
            id: 'apricots',
            name: 'apricots'
        },

        {
            id: 'artichoke_hearts',
            name: 'artichoke hearts'
        },

        {
            id: 'aubergine',
            name: 'aubergine'
        },

        {
            id: 'average_size_bags',
            name: 'average size bags'
        },

        {
            id: 'average_sized_dim_sum',
            name: 'average sized dim sum'
        },

        {
            id: 'average_sized_flapjacks',
            name: 'average sized flapjacks'
        },

        {
            id: 'average_spring_rolls',
            name: 'average spring rolls'
        },

        {
            id: 'average_tubs___bags',
            name: 'average tubs / bags'
        },

        {
            id: 'bacon_and_cheese_grills',
            name: 'bacon and cheese grills'
        },

        {
            id: 'bagels',
            name: 'bagels'
        },

        {
            id: 'bags',
            name: 'bags'
        },

        {
            id: 'balls',
            name: 'balls'
        },

        {
            id: 'bars',
            name: 'bars'
        },

        {
            id: 'batons',
            name: 'batons'
        },

        {
            id: 'beetroot',
            name: 'beetroot'
        },

        {
            id: 'berries',
            name: 'berries'
        },

        {
            id: 'biscuits',
            name: 'biscuits'
        },

        {
            id: 'bites',
            name: 'bites'
        },

        {
            id: 'blocks',
            name: 'blocks'
        },

        {
            id: 'bunches',
            name: 'bunches'
        },

        {
            id: 'buns',
            name: 'buns'
        },

        {
            id: 'burgers',
            name: 'burgers'
        },

        {
            id: 'burritos',
            name: 'burritos'
        },

        {
            id: 'cakes',
            name: 'cakes'
        },

        {
            id: 'cannelloni_tubes',
            name: 'cannelloni tubes'
        },

        {
            id: 'cartons',
            name: 'cartons'
        },

        {
            id: 'cassavas',
            name: 'cassavas'
        },

        {
            id: 'cherries',
            name: 'cherries'
        },

        {
            id: 'chestnuts',
            name: 'chestnuts'
        },

        {
            id: 'chicken_livers',
            name: 'chicken livers'
        },

        {
            id: 'chillies',
            name: 'chillies'
        },

        {
            id: 'chocolate_oranges',
            name: 'chocolate oranges'
        },

        {
            id: 'chocolates',
            name: 'chocolates'
        },

        {
            id: 'cloves',
            name: 'cloves'
        },

        {
            id: 'cocktail_sausages',
            name: 'cocktail sausages'
        },

        {
            id: 'crackers',
            name: 'crackers'
        },

        {
            id: 'crepes',
            name: 'crepes'
        },

        {
            id: 'crumpets',
            name: 'crumpets'
        },

        {
            id: 'cubes',
            name: 'cubes'
        },

        {
            id: 'cups',
            name: 'cups'
        },

        {
            id: 'dates',
            name: 'dates'
        },

        {
            id: 'dessert_spoons',
            name: 'dessert spoons'
        },

        {
            id: 'double_measures',
            name: 'double measures'
        },

        {
            id: 'dough_balls',
            name: 'dough balls'
        },

        {
            id: 'drumsticks',
            name: 'drumsticks'
        },

        {
            id: 'dumplings',
            name: 'dumplings'
        },

        {
            id: 'eggs',
            name: 'eggs'
        },

        {
            id: 'enchiladas',
            name: 'enchiladas'
        },

        {
            id: 'extra_large_bars',
            name: 'extra large bars'
        },

        {
            id: 'extra_large_biscuits',
            name: 'extra large biscuits'
        },

        {
            id: 'extra_large_eggs',
            name: 'extra large eggs'
        },

        {
            id: 'extra_large_triangles',
            name: 'extra large triangles'
        },

        {
            id: 'fajitas',
            name: 'fajitas'
        },

        {
            id: 'falafels',
            name: 'falafels'
        },

        {
            id: 'fatty_cutties',
            name: 'fatty cutties'
        },

        {
            id: 'fillets',
            name: 'fillets'
        },

        {
            id: 'fingers',
            name: 'fingers'
        },

        {
            id: 'fishes',
            name: 'fishes'
        },

        {
            id: 'fritters',
            name: 'fritters'
        },

        {
            id: 'fruits',
            name: 'fruits'
        },

        {
            id: 'giant_crumpets',
            name: 'giant crumpets'
        },

        {
            id: 'grapes',
            name: 'grapes'
        },

        {
            id: 'handfuls',
            name: 'handfuls'
        },

        {
            id: 'half_pints',
            name: 'half pints'
        },

        {
            id: 'heaped_tablespoons',
            name: 'heaped tablespoons'
        },

        {
            id: 'heaped_teaspoons',
            name: 'heaped teaspoons'
        },

        {
            id: 'hoppers',
            name: 'hoppers'
        },

        {
            id: 'hot_pots',
            name: 'hot pots'
        },

        {
            id: 'ice_cream_sandwiches',
            name: 'ice cream sandwiches'
        },

        {
            id: 'individual_packs',
            name: 'individual packs'
        },

        {
            id: 'individual_pies',
            name: 'individual pies'
        },

        {
            id: 'individual_pots',
            name: 'individual pots'
        },

        {
            id: 'individual_tarts',
            name: 'individual tarts'
        },

        {
            id: 'jars',
            name: 'jars'
        },

        {
            id: 'kebabs',
            name: 'kebabs'
        },

        {
            id: 'kingsize_pots',
            name: 'kingsize pots'
        },

        {
            id: 'large_aubergines',
            name: 'large aubergines'
        },

        {
            id: 'large_avocados',
            name: 'large avocados'
        },

        {
            id: 'large_bags',
            name: 'large bags'
        },

        {
            id: 'large_bananas',
            name: 'large bananas'
        },

        {
            id: 'large_bars',
            name: 'large bars'
        },

        {
            id: 'large_biscuits',
            name: 'large biscuits'
        },

        {
            id: 'large_bottles',
            name: 'large bottles'
        },

        {
            id: 'large_bowls',
            name: 'large bowls'
        },

        {
            id: 'large_carrots',
            name: 'large carrots'
        },

        {
            id: 'large_cartons',
            name: 'large cartons'
        },

        {
            id: 'large_chops',
            name: 'large chops'
        },

        {
            id: 'large_cobs',
            name: 'large cobs'
        },

        {
            id: 'large_coconut_spoons',
            name: 'large coconut spoons'
        },

        {
            id: 'large_crackers',
            name: 'large crackers'
        },

        {
            id: 'large_eggs',
            name: 'large eggs'
        },

        {
            id: 'large_fillets',
            name: 'large fillets'
        },

        {
            id: 'large_flapjacks',
            name: 'large flapjacks'
        },

        {
            id: 'large_flatbreads',
            name: 'large flatbreads'
        },

        {
            id: 'large_fruits',
            name: 'large fruits'
        },

        {
            id: 'large_gherkins',
            name: 'large gherkins'
        },

        {
            id: 'large_handfuls',
            name: 'large handfuls'
        },

        {
            id: 'large_hot_dogs',
            name: 'large hot dogs'
        },

        {
            id: 'large_jars',
            name: 'large jars'
        },

        {
            id: 'large_kebabs',
            name: 'large kebabs'
        },

        {
            id: 'large_kiwis',
            name: 'large kiwis'
        },

        {
            id: 'large_mushrooms',
            name: 'large mushrooms'
        },

        {
            id: 'large_naan_breads',
            name: 'large naan breads'
        },

        {
            id: 'large_omelettes_4_eggs',
            name: 'large omelettes (4 eggs)'
        },

        {
            id: 'large_onions',
            name: 'large onions'
        },

        {
            id: 'large_pancakes',
            name: 'large pancakes'
        },

        {
            id: 'large_parsnips',
            name: 'large parsnips'
        },

        {
            id: 'large_pastries',
            name: 'large pastries'
        },

        {
            id: 'large_pieces',
            name: 'large pieces'
        },

        {
            id: 'large_pies',
            name: 'large pies'
        },

        {
            id: 'large_plantains',
            name: 'large plantains'
        },

        {
            id: 'large_portions',
            name: 'large portions'
        },

        {
            id: 'large_pots',
            name: 'large pots'
        },

        {
            id: 'large_scones',
            name: 'large scones'
        },

        {
            id: 'large_share_bags',
            name: 'large share bags'
        },

        {
            id: 'large_skewers',
            name: 'large skewers'
        },

        {
            id: 'large_slices',
            name: 'large slices'
        },

        {
            id: 'large_spring_rolls',
            name: 'large spring rolls'
        },

        {
            id: 'large_squares',
            name: 'large squares'
        },

        {
            id: 'large_steaks',
            name: 'large steaks'
        },

        {
            id: 'large_tarts',
            name: 'large tarts'
        },

        {
            id: 'large_truffles',
            name: 'large truffles'
        },

        {
            id: 'large_tubs',
            name: 'large tubs'
        },

        {
            id: 'leaves',
            name: 'leaves'
        },

        {
            id: 'leeks',
            name: 'leeks'
        },

        {
            id: 'legs',
            name: 'legs'
        },

        {
            id: 'level_tablespoons',
            name: 'level tablespoons'
        },

        {
            id: 'level_teaspoons',
            name: 'level teaspoons'
        },

        {
            id: 'lollipops',
            name: 'lollipops'
        },

        {
            id: 'macaroons',
            name: 'macaroons'
        },

        {
            id: 'mange_tout',
            name: 'mange tout'
        },

        {
            id: 'marshmallows',
            name: 'marshmallows'
        },

        {
            id: 'meatballs',
            name: 'meatballs'
        },

        {
            id: 'medium_aubergines',
            name: 'medium aubergines'
        },

        {
            id: 'medium_avocados',
            name: 'medium avocados'
        },

        {
            id: 'medium_bags',
            name: 'medium bags'
        },

        {
            id: 'medium_bananas',
            name: 'medium bananas'
        },

        {
            id: 'medium_bars',
            name: 'medium bars'
        },

        {
            id: 'medium_beetroot',
            name: 'medium beetroot'
        },

        {
            id: 'medium_biscuits',
            name: 'medium biscuits'
        },

        {
            id: 'medium_bowls',
            name: 'medium bowls'
        },

        {
            id: 'medium_carrots',
            name: 'medium carrots'
        },

        {
            id: 'medium_cartons',
            name: 'medium cartons'
        },

        {
            id: 'medium_chops',
            name: 'medium chops'
        },

        {
            id: 'medium_coconut_spoons',
            name: 'medium coconut spoons'
        },

        {
            id: 'medium_courgettes',
            name: 'medium courgettes'
        },

        {
            id: 'medium_eggs',
            name: 'medium eggs'
        },

        {
            id: 'medium_fillet_steaks',
            name: 'medium fillet steaks'
        },

        {
            id: 'medium_fillets',
            name: 'medium fillets'
        },

        {
            id: 'medium_flatbreads',
            name: 'medium flatbreads'
        },

        {
            id: 'medium_fruits',
            name: 'medium fruits'
        },

        {
            id: 'medium_gherkins',
            name: 'medium gherkins'
        },

        {
            id: 'medium_handfuls',
            name: 'medium handfuls'
        },

        {
            id: 'medium_hot_dogs',
            name: 'medium hot dogs'
        },

        {
            id: 'medium_jars',
            name: 'medium jars'
        },

        {
            id: 'medium_kiwis',
            name: 'medium kiwis'
        },

        {
            id: 'medium_naans',
            name: 'medium naans'
        },

        {
            id: 'medium_omelettes_2_eggs',
            name: 'medium omelettes (2 eggs)'
        },

        {
            id: 'medium_onions',
            name: 'medium onions'
        },

        {
            id: 'medium_parsnips',
            name: 'medium parsnips'
        },

        {
            id: 'medium_pieces',
            name: 'medium pieces'
        },

        {
            id: 'medium_plantains',
            name: 'medium plantains'
        },

        {
            id: 'medium_portions',
            name: 'medium portions'
        },

        {
            id: 'medium_pots',
            name: 'medium pots'
        },

        {
            id: 'medium_scones',
            name: 'medium scones'
        },

        {
            id: 'medium_slices',
            name: 'medium slices'
        },

        {
            id: 'medium_steaks',
            name: 'medium steaks'
        },

        {
            id: 'medium_sundaes',
            name: 'medium sundaes'
        },

        {
            id: 'medium_tubs',
            name: 'medium tubs'
        },

        {
            id: 'meringues',
            name: 'meringues'
        },

        {
            id: 'milles_feuilles',
            name: 'milles feuilles'
        },

        {
            id: 'mini_Oreos',
            name: 'mini Oreos'
        },

        {
            id: 'mini_bars',
            name: 'mini bars'
        },

        {
            id: 'mini_boxes',
            name: 'mini boxes'
        },

        {
            id: 'mini_churros',
            name: 'mini churros'
        },

        {
            id: 'mini_cobs',
            name: 'mini cobs'
        },

        {
            id: 'mini_eclairs',
            name: 'mini eclairs'
        },

        {
            id: 'mini_eggs',
            name: 'mini eggs'
        },

        {
            id: 'mini_fillets',
            name: 'mini fillets'
        },

        {
            id: 'mini_flapjacks',
            name: 'mini flapjacks'
        },

        {
            id: 'mini_macaroons',
            name: 'mini macaroons'
        },

        {
            id: 'mini_marshmallows',
            name: 'mini marshmallows'
        },

        {
            id: 'mini_mozzarella_balls',
            name: 'mini mozzarella balls'
        },

        {
            id: 'mini_pastries',
            name: 'mini pastries'
        },

        {
            id: 'mini_pots',
            name: 'mini pots'
        },

        {
            id: 'mini_skewers',
            name: 'mini skewers'
        },

        {
            id: 'mini_snack_packs',
            name: 'mini snack packs'
        },

        {
            id: 'mini_spring_rolls',
            name: 'mini spring rolls'
        },

        {
            id: 'mini_tubs',
            name: 'mini tubs'
        },

        {
            id: 'mints',
            name: 'mints'
        },

        {
            id: 'mooncakes',
            name: 'mooncakes'
        },

        {
            id: 'mozarella_balls',
            name: 'mozarella balls'
        },

        {
            id: 'mozzarella_sticks',
            name: 'mozzarella sticks'
        },

        {
            id: 'mugs',
            name: 'mugs'
        },

        {
            id: 'multipack_bags',
            name: 'multipack bags'
        },

        {
            id: 'multipack_bottles',
            name: 'multipack bottles'
        },

        {
            id: 'mushrooms',
            name: 'mushrooms'
        },

        {
            id: 'mussels',
            name: 'mussels'
        },

        {
            id: 'nectarines',
            name: 'nectarines'
        },

        {
            id: 'new_potatoes',
            name: 'new potatoes'
        },

        {
            id: 'nuts',
            name: 'nuts'
        },

        {
            id: 'nuts_fruits',
            name: 'nuts/fruits'
        },

        {
            id: 'olives',
            name: 'olives'
        },

        {
            id: 'onion_rings',
            name: 'onion rings'
        },

        {
            id: 'onions',
            name: 'onions'
        },

        {
            id: 'oysters',
            name: 'oysters'
        },

        {
            id: 'packets',
            name: 'packets'
        },

        {
            id: 'packs',
            name: 'packs'
        },

        {
            id: 'pancakes',
            name: 'pancakes'
        },

        {
            id: 'panna_cottas',
            name: 'panna cottas'
        },

        {
            id: 'pastries',
            name: 'pastries'
        },

        {
            id: 'peaches',
            name: 'peaches'
        },

        {
            id: 'peppers',
            name: 'peppers'
        },

        {
            id: 'pieces',
            name: 'pieces'
        },

        {
            id: 'pies',
            name: 'pies'
        },

        {
            id: 'pigs_in_blankets',
            name: 'pigs in blankets'
        },

        {
            id: 'pikelets',
            name: 'pikelets'
        },

        {
            id: 'pilchards',
            name: 'pilchards'
        },

        {
            id: 'pints',
            name: 'pints'
        },

        {
            id: 'pods',
            name: 'pods'
        },

        {
            id: 'poppadums',
            name: 'poppadums'
        },

        {
            id: 'portions',
            name: 'portions'
        },

        {
            id: 'potato_skins',
            name: 'potato skins'
        },

        {
            id: 'potatoes',
            name: 'potatoes'
        },

        {
            id: 'pots',
            name: 'pots'
        },

        {
            id: 'pots_slices',
            name: 'pots/slices'
        },

        {
            id: 'pouches',
            name: 'pouches'
        },

        {
            id: 'prawns',
            name: 'prawns'
        },

        {
            id: 'pretzels',
            name: 'pretzels'
        },

        {
            id: 'profiteroles',
            name: 'profiteroles'
        },

        {
            id: 'prunes',
            name: 'prunes'
        },

        {
            id: 'punnets',
            name: 'punnets'
        },

        {
            id: 'rashers',
            name: 'rashers'
        },

        {
            id: 'regular_churros',
            name: 'regular churros'
        },

        {
            id: 'regular_standard_kebabs',
            name: 'regular / standard kebabs'
        },

        {
            id: 'ribs',
            name: 'ribs'
        },

        {
            id: 'rice_cakes',
            name: 'rice cakes'
        },

        {
            id: 'rings',
            name: 'rings'
        },

        {
            id: 'rolls',
            name: 'rolls'
        },

        {
            id: 'sachets',
            name: 'sachets'
        },

        {
            id: 'sachets_made_up_with_milk',
            name: 'sachets (made up with milk)'
        },

        {
            id: 'sandwiches_made_with_two_slices_of_bread',
            name: 'sandwiches (made with two slices of bread)'
        },

        {
            id: 'sausages',
            name: 'sausages'
        },

        {
            id: 'scallops',
            name: 'scallops'
        },

        {
            id: 'scones',
            name: 'scones'
        },

        {
            id: 'scoops_of_powder',
            name: 'scoops of powder'
        },

        {
            id: 'seeds',
            name: 'seeds'
        },

        {
            id: 'segments',
            name: 'segments'
        },

        {
            id: 'share_bags',
            name: 'share bags'
        },

        {
            id: 'sheets',
            name: 'sheets'
        },

        {
            id: 'shots',
            name: 'shots'
        },

        {
            id: 'shrimps',
            name: 'shrimps'
        },

        {
            id: 'single_measures',
            name: 'single measures'
        },

        {
            id: 'slices',
            name: 'slices'
        },

        {
            id: 'slices_1_12th_of_cake',
            name: 'slices (1/12th of cake)'
        },

        {
            id: 'slices_1_8th_of_cake',
            name: 'slices (1/8th of cake)'
        },

        {
            id: 'slices_1_8th_of_pie',
            name: 'slices (1/8th of pie)'
        },

        {
            id: 'slices_of_large_flatbread',
            name: 'slices of large flatbread'
        },

        {
            id: 'small_aubergines',
            name: 'small aubergines'
        },

        {
            id: 'small_avocados',
            name: 'small avocados'
        },

        {
            id: 'small_bags',
            name: 'small bags'
        },

        {
            id: 'small_bananas',
            name: 'small bananas'
        },

        {
            id: 'small_bars',
            name: 'small bars'
        },

        {
            id: 'small_beetroot',
            name: 'small beetroot'
        },

        {
            id: 'small_biscuits',
            name: 'small biscuits'
        },

        {
            id: 'small_bottles',
            name: 'small bottles'
        },

        {
            id: 'small_bowls',
            name: 'small bowls'
        },

        {
            id: 'small_burgers',
            name: 'small burgers'
        },

        {
            id: 'small_cakes',
            name: 'small cakes'
        },

        {
            id: 'small_carrots',
            name: 'small carrots'
        },

        {
            id: 'small_cartons',
            name: 'small cartons'
        },

        {
            id: 'small_chops',
            name: 'small chops'
        },

        {
            id: 'small_coconut_spoons',
            name: 'small coconut spoons'
        },

        {
            id: 'small_crepes',
            name: 'small crepes'
        },

        {
            id: 'small_eggs',
            name: 'small eggs'
        },

        {
            id: 'small_fillets',
            name: 'small fillets'
        },

        {
            id: 'small_flatbreads',
            name: 'small flatbreads'
        },

        {
            id: 'small_fruits',
            name: 'small fruits'
        },

        {
            id: 'small_gherkins',
            name: 'small gherkins'
        },

        {
            id: 'small_handfuls',
            name: 'small handfuls'
        },

        {
            id: 'small_hot_dogs',
            name: 'small hot dogs'
        },

        {
            id: 'small_individual_pavlovas',
            name: 'small individual pavlovas'
        },

        {
            id: 'small_individual_tubs',
            name: 'small individual tubs'
        },

        {
            id: 'small_jars',
            name: 'small jars'
        },

        {
            id: 'small_kiwis',
            name: 'small kiwis'
        },

        {
            id: 'small_mushrooms',
            name: 'small mushrooms'
        },

        {
            id: 'small_naans',
            name: 'small naans'
        },

        {
            id: 'small_omelettes_1_egg',
            name: 'small omelettes (1 egg)'
        },

        {
            id: 'small_onions',
            name: 'small onions'
        },

        {
            id: 'small_packets',
            name: 'small packets'
        },

        {
            id: 'small_pancakes',
            name: 'small pancakes'
        },

        {
            id: 'small_pastries',
            name: 'small pastries'
        },

        {
            id: 'small_parsnips',
            name: 'small parsnips'
        },

        {
            id: 'small_pieces',
            name: 'small pieces'
        },

        {
            id: 'small_pies',
            name: 'small pies'
        },

        {
            id: 'small_plantains',
            name: 'small plantains'
        },

        {
            id: 'small_portions',
            name: 'small portions'
        },

        {
            id: 'small_pots',
            name: 'small pots'
        },

        {
            id: 'small_scones',
            name: 'small scones'
        },

        {
            id: 'small_slices',
            name: 'small slices'
        },

        {
            id: 'small_souffles',
            name: 'small souffles'
        },

        {
            id: 'small_squares',
            name: 'small squares'
        },

        {
            id: 'small_steaks',
            name: 'small steaks'
        },

        {
            id: 'small_sticks',
            name: 'small sticks'
        },

        {
            id: 'small_sundaes',
            name: 'small sundaes'
        },

        {
            id: 'small_tins',
            name: 'small tins'
        },

        {
            id: 'small_truffles',
            name: 'small truffles'
        },

        {
            id: 'small_tubs',
            name: 'small tubs'
        },

        {
            id: 'snack_size_bars',
            name: 'snack size bars'
        },

        {
            id: 'spears',
            name: 'spears'
        },

        {
            id: 'sprigs',
            name: 'sprigs'
        },

        {
            id: 'sprouts',
            name: 'sprouts'
        },

        {
            id: 'squares',
            name: 'squares'
        },

        {
            id: 'standard_bags',
            name: 'standard bags'
        },

        {
            id: 'standard_bars',
            name: 'standard bars'
        },

        {
            id: 'standard_boxes',
            name: 'standard boxes'
        },

        {
            id: 'standard_packs',
            name: 'standard packs'
        },

        {
            id: 'standard_size_bottles',
            name: 'standard size bottles'
        },

        {
            id: 'standard_size_sticks',
            name: 'standard size sticks'
        },

        {
            id: 'steaks',
            name: 'steaks'
        },

        {
            id: 'sticks',
            name: 'sticks'
        },

        {
            id: 'straws',
            name: 'straws'
        },

        {
            id: 'stuffed_peppers_half_a_pepper',
            name: 'stuffed peppers (half a pepper)'
        },

        {
            id: 'sweets',
            name: 'sweets'
        },

        {
            id: 'tablespoons',
            name: 'tablespoons'
        },

        {
            id: 'tablets',
            name: 'tablets'
        },

        {
            id: 'tablets_capsules',
            name: 'tablets/capsules'
        },

        {
            id: 'takeaway_portions',
            name: 'takeaway portions'
        },

        {
            id: 'tarts',
            name: 'tarts'
        },

        {
            id: 'teaspoons',
            name: 'teaspoons'
        },

        {
            id: 'thick_slices',
            name: 'thick slices'
        },

        {
            id: 'thighs',
            name: 'thighs'
        },

        {
            id: 'thin_slices',
            name: 'thin slices'
        },

        {
            id: 'tins',
            name: 'tins'
        },

        {
            id: 'tomatoes',
            name: 'tomatoes'
        },

        {
            id: 'treble_measures',
            name: 'treble measures'
        },

        {
            id: 'triangle_slices_half_a_piece_of_bread',
            name: 'triangle slices (half a piece of bread)'
        },

        {
            id: 'tubes',
            name: 'tubes'
        },

        {
            id: 'tubs',
            name: 'tubs'
        },

        {
            id: 'very_thick_slices',
            name: 'very thick slices'
        },

        {
            id: 'vine_leaves',
            name: 'vine leaves'
        },

        {
            id: 'vol_au_vents',
            name: 'vol-au-vents'
        },

        {
            id: 'wafers',
            name: 'wafers'
        },

        {
            id: 'waffles',
            name: 'waffles'
        },

        {
            id: 'wedges',
            name: 'wedges'
        },

        {
            id: 'whole_cakes',
            name: 'whole cakes'
        },

        {
            id: 'whole_camemberts',
            name: 'whole camemberts'
        },

        {
            id: 'whole_large_pies',
            name: 'whole large pies'
        },

        {
            id: 'whole_large_quiches',
            name: 'whole large quiches'
        },

        {
            id: 'whole_large_tarts',
            name: 'whole large tarts'
        },

        {
            id: 'whole_radishes',
            name: 'whole radishes'
        },

        {
            id: 'whole_rolls',
            name: 'whole rolls'
        },

        {
            id: 'whole_sausages',
            name: 'whole sausages'
        },

        {
            id: 'whole_small_quiches',
            name: 'whole small quiches'
        },

        {
            id: 'whole_stuffed_peppers',
            name: 'whole stuffed peppers'
        },

        {
            id: 'wings',
            name: 'wings'
        },

        {
            id: 'wraps_made_with_one_whole_tortilla',
            name: 'wraps made with one whole tortilla'
        },

        {
            id: 'yams',
            name: 'yams'
        },

    ];

    return _.sortBy(l, 'name');
};