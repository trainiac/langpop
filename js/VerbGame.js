
function get_random_int(min, max) {
    /**
     * Returns a random integer between min (inclusive) and max (inclusive)
     * Using Math.round() will give you a non-uniform distribution!
     */
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function iso_timestamp() {
    return (new Date()).toISOString();
}

function iso_timestamp_difference(date2, date1) {
    return (new Date(date2)) - (new Date(date1));
}

var VerbGame = {
    default_tests: {
        subjects: 'all',
        verbs: 'all',
        tenses: 'all'
    },
    storage: {
        get_current_game: function(){
            if(this._current_game){
                return this._current_game;
            }

            this._current_game = JSON.parse(localStorage.getItem('VerbGame.current_game'));
            return this._current_game;
        },
        update_current_game: function(updates){
            var current_game = this.get_current_game();
            var updated;

            if(current_game !== null){
                updated = $.extend(true, current_game, updates);
            } else {
                updated = updates;
            }

            localStorage.setItem('VerbGame.current_game', JSON.stringify(updated));
            return updated;
        },
        get_saved_games: function(){
            if(this._saved_games){
                return this._saved_games;
            }

            this._saved_games = JSON.parse(localStorage.getItem('VerbGame.saved_games')) || [];
            return this._saved_games;
        },
        archive_current_game: function(){
            var current_game = this.get_current_game();
            var saved_games = this.get_saved_games();
            saved_games.push({
                start_date: current_game.start_date,
                end_date: current_game.end_date,
                failed_tests: current_game.failed_tests,
                passed_tests: current_game.passed_tests,
                remaining_tests: current_game.remaining_tests.length
            });
            localStorage.setItem('VerbGame.saved_games', JSON.stringify(saved_games));
        }
    },
    controller: {
        handler: function(e){
            var action = $(this).attr('data-action'));
            switch(action) {
                case 'continue-existing-game-button':
                    VerbGame.views.draw_current_test();
                    break;
                default:
                    new Error('No Handler for: ' + action);
            }
        }
        init: function(verb_data){
            var verbs;
            var tenses;
            var current_game = VerbGame.storage.get_current_game();
            this.verb_data = verb_data;

            $('input').on('keyup', function(e){
                var current_game = VerbGame.storage.get_current_game();
                if (e.which === 13) {
                    if (current_game.current_test.answer === undefined) {
                        VerbGame.check_answer($(this).val());
                        VerbGame.draw_test();
                    } else {
                        VerbGame.next_test();
                    }
                }
            });

            $('.play-again-button').on('click', function(){
                var current_game = VerbGame.storage.get_current_game();
                VerbGame.end();
                VerbGame.start(current_game.initial_tests);
            });

            $('.missed-button').on('click', function(){
                var current_game = VerbGame.storage.get_current_game();
                $.each(current_game.failed_tests, function(i, test){
                    delete test.passed;
                    delete test.answer;
                    delete test.date;
                });
                VerbGame.end();
                VerbGame.start(current_game.failed_tests);
            });

            $('button.choose-verbs').on('click', function(){
                verbs = $('ul.choose-verbs input:checked').map(function(index, el){
                    return $(el).val();
                }).get();
                VerbGame.draw_choose_tenses();
            });

            $('button.choose-tenses').on('click', function(){
                tenses = $('ul.choose-tenses input:checked').map(function(index, el){
                    return $(el).val();
                }).get();

                VerbGame.start(VerbGame.compile_tests({
                    'tenses': tenses,
                    'verbs': verbs
                }));
            });

            $('#all_verbs').on('change', function(){
                $('ul.choose-verbs input').prop('checked', $(this).prop('checked'));
            });

            $('#all_tenses').on('change', function(){
                $('ul.choose-tenses input').prop('checked', $(this).prop('checked'));
            });

            this.draw_start();
        },
        check_answer: function(answer){
            var current_test =  this.storage.get_current_game().current_test;
            answer = $.trim(answer).toLowerCase();
            current_test.answer = answer;
            current_test.end = iso_timestamp();
            current_test.time = iso_timestamp_difference(current_test.end_date, current_test.start_date);
            if( answer === current_test.conjugation ){
                current_test.passed = true;
                game_data.passed_tests.push(current_test);
            } else {
                current_test.passed = false;
                game_data.failed_tests.push(current_test);
            }
            this.update_game_data(game_data);
        },
        next_test: function(){
            var current_game;
            this.pick_test();
            current_game = this.storage.get_current_game();
            if(!current_game.current_test){
                this.draw_score();
            } else {
                this.draw_test();
            }
        },
        start: function(tests, test_topic_data) {
            var game_data = this.update_game_data({
                current_test: null,
                failed_tests: [],
                passed_tests: [],
                remaining_tests: tests
            });

            if(game_data.initial_tests === undefined){
                this.update_game_data({
                    initial_tests: $.extend(true, [], tests)
                });
            }

            game_data.start_date = iso_timestamp();
            this.next_test();
        },
        end: function(){
            var game_data = this.storage.get_current_game();
            game_data.end_date = iso_timestamp();
            game_date.time =
            VerbGame.storage.archive_current_game();
        },
        pick_test: function(){
            var current_game = this.storage.get_current_game();
            var index;
            if (current_game.remaining_tests.length) {
                index = get_random_int(0, current_game.remaining_tests.length - 1);
                current_game.current_test = current_game.remaining_tests.splice(index, 1)[0];
                current_game.current_test.start = iso_timestamp();
                this.storage.update_current_game({
                    current_test: current_game.current_test
                });
            } else {
                this.storage.update_current_game({
                    current_test: null
                });
            }
        },
        compile_tests: function(testData){
            var formatted = [],
                verb_data,
                tense_data,
                verb,
                tense,
                subject,
                subject_list,
                conjugation,
                random_subject_index,
                i,
                j,
                k,
                l;

            verbs = testData.verbs || VerbGame.default_tests.verbs;
            tenses = testData.tenses || VerbGame.default_tests.tenses;

            subjects = [];
            $.each(this.verb_data.subjects, function(key, val){
                subjects.push(key);
            });

            if (tenses === 'all') {
                tenses = [];
                $.each(this.verb_data.tenses, function(key, val){
                    tenses.push(key);
                });
            }

            if(verbs == 'all') {
                verbs = [];
                $.each(this.verb_data.verbs, function(key, val){
                    verbs.push(key);
                });
            }

            for (i = 0 ; i < verbs.length; i++){
                verb = verbs[i];
                verb_data = this.verb_data.verbs[verb];
                for (j = 0; j < tenses.length; j++){
                    tense = tenses[j];
                    tense_data = this.verb_data.tenses[tense];
                    for(k = 0; k < subjects.length; k++){
                        if (  !tense_data.requires_subject ){
                            conjugation = this.verb_data.conjugate(verb, tense);
                            formatted.push({
                                verb: verb_data,
                                tense: tense_data,
                                subject: 'Não sujeito',
                                conjugation: conjugation
                            });
                            break;
                        }
                        subject = subjects[k];
                        subject_list = this.verb_data.subjects[subject];
                        random_subject_index = get_random_int(0, subject_list.length - 1);
                        conjugation = this.verb_data.conjugate(verb, tense, subject);
                        formatted.push({
                            verb: verb_data,
                            tense: tense_data,
                            subject: subject_list[random_subject_index],
                            conjugation: conjugation
                        });
                    }
                }
            }

            return formatted;
        }
    },
    views:{
        home: {
            events: function(){
                this.$el = $('[start-menu-container]');
                this.$el.on('click', '[data-action=continue-existing-game-button]', VerbGame.controller.handler);
                this.$el.on('click', '[data-action=start-new-game-button]', VerbGame.controller.handler);
                this.$el.on('click', '[data-action=view-all-time-score-board]', VerbGame.controller.handler);
            },
            draw: function() {
                $('.start-screen').removeClass('hide');
                this.draw_choose_verbs();
            },
        },
        new_game_menu: {
            events: function(){

            },
            draw: function(){
                var verb_choices = [],
                    verb_choices_html,
                    verb;

                $('div.choose-verbs').removeClass('hide');
                $('div.choose-tenses').addClass('hide');
                $('#all_verbs').prop('checked', false);

                for(verb in this.verb_data.verbs){
                    verb_choices.push(verb);
                }

                verb_choices.sort(function(a, b){
                    if (a < b){
                        return -1;
                    }
                    if (a > b){
                        return 1;
                    }
                    return 0;
                });

                verb_choices_html = $.map(verb_choices, function(verb_choice){
                    var verb_choice_html = '<li>' +
                        '<label for="verb_choice_{verb}">' +
                            '{verb}' +
                            '<input id="verb_choice_{verb}" type="checkbox" value="{verb}" />' +
                        '</label>' +
                    '</li>';
                    return verb_choice_html.replace(/{verb}/g, verb_choice);
                }).join('');

                $('ul.choose-verbs').html(verb_choices_html);
            }
        },
        choose_tenses: function(){
            var tense_choices = [],
                tense_choices_html,
                tense;

            $('div.choose-verbs').addClass('hide');
            $('div.choose-tenses').removeClass('hide');
            $('#all_tenses').prop('checked', false);

            for(tense in this.verb_data.tenses){
                tense_choices.push(tense);
            }

            tense_choices.sort(function(a, b){
                if (a < b){
                    return -1;
                }
                if (a > b){
                    return 1;
                }
                return 0;
            });

            tense_choices_html = $.map(tense_choices, function(tense_choice){
                var tense_choice_html = '<li>' +
                    '<label for="tense_choice_{tense}">' +
                        '{tense}' +
                        '<input id="tense_choice_{tense}" type="checkbox" value="{tense}" />' +
                    '</label>' +
                '</li>';
                return tense_choice_html.replace(/{tense}/g, tense_choice);
            }).join('');

            $('ul.choose-tenses').html(tense_choices_html);
        },
        draw_test: function(){
            var game_data = this.storage.get_current_game();
            var current_test = game_data.current_test;

            $('.game-container').removeClass('hide correct mistake');
            $('.start-screen').addClass('hide');


            if ( current_test.answer !== undefined ){
                if( current_test.passed === true ){
                    $('.game-container').addClass('correct');
                } else if( current_test.passed === false ) {
                    $('.game-container').addClass('mistake');
                }
                $('.solution').removeClass('hide');
            }

            $('.score').addClass('hide');
            $('.score .missed').addClass('hide');
            $('.missed-button').addClass('hide');

            $('.subject').text(current_test.subject);
            $('.tense-name').text(current_test.tense.english);

            if(current_test.tense.description){
                $('.tense-description')
                    .removeClass('hide')
                    .html(current_test.tense.description);
            } else {
                $('.tense-description').addClass('hide');
            }

            if(current_test.tense.example){
                $('.tense-example')
                    .removeClass('hide')
                    .html(current_test.tense.example);
            } else {
                $('.tense-example').addClass('hide');
            }

            $('.infinitive').text('to ' + current_test.verb.definitions.join(', to '));
            $('.solution').text(current_test.conjugation);
            $('.games-left-counter').text('Jogos Deixados: ' + game_data.remaining_tests.length.toLocaleString());
            $('.score-counter').text(
                'Contagem: ' +
                game_data.passed_tests.length + ' / ' +
                (game_data.passed_tests.length + game_data.failed_tests.length)
            );

            if ( current_test.answer === undefined ){
                $('.solution').addClass('hide');
                $('input').val('');
                $('input').focus();
            }
        },
        draw_score: function(){
            var game_data = this.storage.get_current_game();
            $('.score .message').text(
                'Contagem: ' +
                game_data.passed_tests.length + ' / ' +
                (game_data.passed_tests.length + game_data.failed_tests.length)
            );
            if(game_data.failed_tests.length){
                game_data.failed_tests.sort(function(a, b){
                    if (a.verb.name < b.verb.name){
                        return -1;
                    }
                    if (a.verb.name > b.verb.name){
                        return 1;
                    }
                    if (a.tense.name < b.tense.name){
                        return -1;
                    }
                    if (a.tense.name > b.tense.name){
                        return 1;
                    }
                    return 0;
                });
                rows = $.map(game_data.failed_tests, function(t){
                    return (
                        '<tr><td>' + t.subject + '</td>' +
                        '<td>' + t.verb.name + '</td>' +
                        '<td>to ' + t.verb.definitions.join(', to ') + '</td>' +
                        '<td>' + t.tense.name + '</td>' +
                        '<td>' + t.conjugation + '</td>' +
                        '<td>' + t.answer + '</td></tr>'
                    );
                });
                $('.score .missed tbody').html(rows.join(''));
                $('.missed-button').removeClass('hide');
                $('.score .missed').removeClass('hide');
            }
            $('.game-container').addClass('hide');
            $('.score').removeClass('hide');
        }
    }
};

VerbGame.controller.init(VerbGameData);
