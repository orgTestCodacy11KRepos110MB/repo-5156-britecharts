import * as d3 from 'd3';

import chart from './scatter-plot';
import { ScatterPlotDataBuilder } from './scatterPlotDataBuilder';

const aTestDataSet = () => new ScatterPlotDataBuilder();
const buildDataSet = (dataSetName) => {
    return aTestDataSet()[dataSetName]().build();
};

describe('Scatter Plot', () => {
    let scatterPlot, dataset, containerFixture;

    beforeEach(() => {
        const fixture =
            '<div id="fixture"><div class="test-container"></div></div>';

        // adds an html fixture to the DOM
        document.body.insertAdjacentHTML('afterbegin', fixture);
        dataset = buildDataSet('withFourNames');
        scatterPlot = chart().grid('full');

        containerFixture = d3.select('.test-container').append('svg');
        containerFixture.datum(dataset).call(scatterPlot);
    });

    // remove the html fixture from the DOM
    afterEach(() => {
        document.body.removeChild(document.getElementById('fixture'));
    });

    describe('Render', () => {
        it('should render a chart with minimal requirements', () => {
            const expected = 1;
            const actual = containerFixture.select('.scatter-plot').size();

            expect(actual).toEqual(expected);
        });

        describe('groups', () => {
            it('should create a container-group', () => {
                const expected = 1;
                const actual = containerFixture
                    .select('g.container-group')
                    .size();

                expect(actual).toEqual(expected);
            });

            it('should create a chart-group', () => {
                const expected = 1;
                const actual = containerFixture.select('g.chart-group').size();

                expect(actual).toEqual(expected);
            });

            it('should create a x-axis-group', () => {
                const expected = 1;
                const actual = containerFixture.select('g.x-axis-group').size();

                expect(actual).toEqual(expected);
            });

            it('should create a y-axis-group', () => {
                const expected = 1;
                const actual = containerFixture.select('g.y-axis-group').size();

                expect(actual).toEqual(expected);
            });

            it('should render axis labels group', () => {
                const expected = 1;
                const actual = containerFixture
                    .select('.axis-labels-group')
                    .size();

                expect(actual).toEqual(expected);
            });

            it('should render clip-path container', () => {
                const expected = 1;
                const actual = containerFixture
                    .select('#scatter-clip-path')
                    .size();

                expect(actual).toEqual(expected);
            });

            it('should create a grid-lines-group', () => {
                const expected = 1;
                const actual = containerFixture
                    .select('g.grid-lines-group')
                    .size();

                expect(actual).toEqual(expected);
            });

            it('should create a metadata-group', () => {
                const expected = 1;
                const actual = containerFixture
                    .select('g.metadata-group')
                    .size();

                expect(actual).toEqual(expected);
            });
        });

        describe('axis', () => {
            it('should draw an X axis', () => {
                const expected = 1;
                const actual = containerFixture
                    .select('.x-axis-group .axis.x')
                    .size();

                expect(actual).toEqual(expected);
            });

            it('should draw an Y axis', () => {
                const expected = 1;
                const actual = containerFixture
                    .select('.y-axis-group .axis.y')
                    .size();

                expect(actual).toEqual(expected);
            });
        });

        describe('grid', () => {
            it('should render horizontal grid lines', () => {
                const expected = 1;
                const actual = containerFixture
                    .select('g.grid.horizontal')
                    .size();

                expect(actual).toEqual(expected);
            });

            it('should render vertical grid lines', () => {
                const expected = 1;
                const actual = containerFixture
                    .select('g.grid.vertical')
                    .size();

                expect(actual).toEqual(expected);
            });

            it('should render one less gridline than the number of ticks', () => {
                const actualVerticalN = containerFixture
                    .selectAll('.grid.vertical .grid-line')
                    .size();
                const actualHorizontalN = containerFixture
                    .selectAll('.grid.horizontal .grid-line')
                    .size();
                const expectedXticks = containerFixture
                    .selectAll('.x-axis-group .tick')
                    .size();
                const expectedYticks = containerFixture
                    .selectAll('.y-axis-group .tick')
                    .size();

                expect(actualVerticalN).toBe(expectedXticks - 1);
                expect(actualHorizontalN).toBe(expectedYticks - 1);
            });
        });

        describe('data points(circles) default state', () => {
            /**
             * With animation, the chart is initialized without
             * points. In order to render data points in tests,
             * animations should be turned off.
             */
            beforeEach(() => {
                const fixture =
                    '<div id="fixture"><div class="test-container"></div></div>';

                // adds an html fixture to the DOM
                document.body.insertAdjacentHTML('afterbegin', fixture);

                dataset = buildDataSet('withOneSource');
                scatterPlot = chart().isAnimated(false);

                containerFixture = d3.select('.test-container');
                containerFixture.datum(dataset).call(scatterPlot);
            });

            // remove the html fixture from the DOM
            afterEach(() => {
                document.body.removeChild(document.getElementById('fixture'));
            });

            it('container renders a circle for each data point', () => {
                const expected = dataset.length;
                const actual = containerFixture
                    .select('.chart-group')
                    .selectAll('circle')
                    .size();

                expect(actual).toEqual(expected);
            });

            it('should have proper default parameteres', () => {
                const circles = containerFixture
                    .selectAll('.chart-group circle')
                    .nodes();

                circles.forEach((circle) => {
                    expect(circle.getAttribute('class')).toEqual('data-point');
                    expect(circle.getAttribute('fill-opacity')).toEqual('0.24');
                    expect(circle.getAttribute('stroke-opacity')).toEqual('1');
                    expect(circle.getAttribute('fill')).toBeDefined();
                    expect(circle.getAttribute('cx')).toBeDefined();
                    expect(circle.getAttribute('cy')).toBeDefined();
                    expect(circle.getAttribute('style')).toBeDefined();
                });
            });
        });

        describe('when hasHollowCircles is set to true', () => {
            beforeEach(() => {
                const fixture =
                    '<div id="fixture"><div class="test-container"></div></div>';

                // adds an html fixture to the DOM
                document.body.insertAdjacentHTML('afterbegin', fixture);

                dataset = buildDataSet('withOneSource');
                scatterPlot = chart().isAnimated(false).hasHollowCircles(true);
                containerFixture = d3.select('.test-container');
                containerFixture.datum(dataset).call(scatterPlot);
            });

            // remove the html fixture from the DOM
            afterEach(() => {
                document.body.removeChild(document.getElementById('fixture'));
            });

            it('data points should have a fixed fill', () => {
                const expected = '#fff';

                containerFixture.datum(dataset).call(scatterPlot);
                const circles = containerFixture
                    .selectAll('.chart-group circle')
                    .nodes();

                circles.forEach((circle) => {
                    expect(circle.getAttribute('fill')).toBe(expected);
                });
            });
        });

        describe('when it has a trend line', () => {
            it('should render a path node', () => {
                const expected = 1;

                scatterPlot.hasTrendline(true);
                containerFixture.datum(dataset).call(scatterPlot);
                const actual = containerFixture
                    .selectAll('.scatter-trendline')
                    .size();

                expect(actual).toBe(expected);
            });

            it('path node should have correct properties', () => {
                scatterPlot.hasTrendline(true);
                containerFixture.datum(dataset).call(scatterPlot);

                const trendline = containerFixture
                    .selectAll('.scatter-trendline')
                    .node();

                expect(trendline.getAttribute('class')).toBeDefined();
                expect(trendline.getAttribute('d')).toBeDefined();
                expect(trendline.getAttribute('stroke')).toBeDefined();
                expect(trendline.getAttribute('stroke-width')).toBeDefined();
                expect(trendline.getAttribute('fill')).toBeDefined();
                expect(
                    trendline.getAttribute('stroke-dasharray')
                ).toBeDefined();
                expect(
                    trendline.getAttribute('stroke-dashoffset')
                ).toBeDefined();
            });
        });

        describe('point highlighter', () => {
            it('is successfully initialized on render', () => {
                const expected = 1;
                const actual = containerFixture
                    .select('.highlight-circle')
                    .size();

                expect(actual).toEqual(expected);
            });

            it('initially has only class and cursor attributes', () => {
                const expectedCursor = 'pointer';
                const expectedClass = 'highlight-circle';
                const scatterPoint = containerFixture
                    .selectAll('.highlight-circle')
                    .node();

                expect(scatterPoint.getAttribute('cursor')).toEqual(
                    expectedCursor
                );
                expect(scatterPoint.getAttribute('class')).toEqual(
                    expectedClass
                );
            });

            it('should change attribute when a data point is hovered', () => {
                const expectedCursor = 'pointer';
                const expectedOpacity = '1';
                const expectedStroke = '#6aedc7';
                const expectedFillOpacity = '0.24';
                const expectedCx = '39';
                const expectedCy = '398';
                const expectedFilter = 'url(#highlight-filter)';
                const container = containerFixture.select('svg');

                container.dispatch('mousemove');
                const scatterPoint = containerFixture
                    .selectAll('.highlight-circle')
                    .node();

                expect(scatterPoint.getAttribute('cursor')).toEqual(
                    expectedCursor
                );
                expect(scatterPoint.getAttribute('opacity')).toEqual(
                    expectedOpacity
                );
                expect(scatterPoint.getAttribute('stroke')).toEqual(
                    expectedStroke
                );
                expect(scatterPoint.getAttribute('fill')).toEqual(
                    expectedStroke
                );
                expect(scatterPoint.getAttribute('fill-opacity')).toEqual(
                    expectedFillOpacity
                );
                expect(scatterPoint.getAttribute('cx')).toEqual(expectedCx);
                expect(scatterPoint.getAttribute('cy')).toEqual(expectedCy);
                expect(scatterPoint.getAttribute('filter')).toEqual(
                    expectedFilter
                );
            });
        });

        describe('when it has cross-hairs', () => {
            beforeEach(() => {
                scatterPlot.hasCrossHairs(true);
                containerFixture.datum(dataset).call(scatterPlot);
            });

            describe('cross hair lines', () => {
                describe('cross hair lines', () => {
                    it('successfully initialize with container on render', () => {
                        const expected = 1;
                        const testContainer = containerFixture
                            .select('.crosshair-lines-container')
                            .size();
                        const testXLine = containerFixture
                            .select('line.highlight-x-line')
                            .size();
                        const testYLine = containerFixture
                            .select('line.highlight-y-line')
                            .size();

                        expect(testContainer).toEqual(expected);
                        expect(testXLine).toEqual(expected);
                        expect(testYLine).toEqual(expected);
                    });

                    it('crosshair line with respect to x changes attributes', () => {
                        const container = containerFixture.select('svg');
                        const expectedStroke = '#6aedc7';

                        container.dispatch('mousemove');
                        const scatterPoint = containerFixture
                            .select('line.highlight-x-line')
                            .node();

                        expect(scatterPoint.getAttribute('stroke')).toEqual(
                            expectedStroke
                        );
                        expect(scatterPoint.getAttribute('x1')).toBeDefined();
                        expect(scatterPoint.getAttribute('x2')).toBeDefined();
                        expect(scatterPoint.getAttribute('y1')).toBeDefined();
                        expect(scatterPoint.getAttribute('y2')).toBeDefined();
                    });

                    it('crosshair line with respect to y changes attributes', () => {
                        const container = containerFixture.select('svg');
                        const expectedStroke = '#6aedc7';

                        container.dispatch('mousemove');
                        const scatterPoint = containerFixture
                            .select('line.highlight-y-line')
                            .node();

                        expect(scatterPoint.getAttribute('stroke')).toEqual(
                            expectedStroke
                        );
                        expect(scatterPoint.getAttribute('x1')).toBeDefined();
                        expect(scatterPoint.getAttribute('x2')).toBeDefined();
                        expect(scatterPoint.getAttribute('y1')).toBeDefined();
                        expect(scatterPoint.getAttribute('y2')).toBeDefined();
                    });
                });

                describe('crosshair labels', () => {
                    it('successfully initialize with container on render', () => {
                        const expected = 1;
                        const testContainer = containerFixture
                            .select('.crosshair-labels-container')
                            .size();
                        const testXText = containerFixture
                            .select('text.highlight-x-legend')
                            .size();
                        const testYText = containerFixture
                            .select('text.highlight-y-legend')
                            .size();

                        expect(testContainer).toEqual(expected);
                        expect(testXText).toEqual(expected);
                        expect(testYText).toEqual(expected);
                    });

                    it('crosshair label with respect to x changes attributes', () => {
                        const container = containerFixture.select('svg');
                        const expectedFill = '#6aedc7';

                        container.dispatch('mousemove');
                        const scatterText = containerFixture
                            .select('text.highlight-x-legend')
                            .node();

                        expect(scatterText.getAttribute('fill')).toEqual(
                            expectedFill
                        );
                        expect(
                            scatterText.getAttribute('text-anchor')
                        ).toBeDefined();
                        expect(scatterText.getAttribute('x')).toBeDefined();
                        expect(scatterText.getAttribute('y')).toBeNull();
                    });

                    it('crosshair label with respect to y changes attributes', () => {
                        const container = containerFixture.select('svg');
                        const expectedFill = '#6aedc7';

                        container.dispatch('mousemove');
                        const scatterText = containerFixture
                            .select('text.highlight-y-legend')
                            .node();

                        expect(scatterText.getAttribute('fill')).toEqual(
                            expectedFill
                        );
                        expect(
                            scatterText.getAttribute('text-anchor')
                        ).toBeDefined();
                        expect(scatterText.getAttribute('x')).toBeDefined();
                        expect(scatterText.getAttribute('y')).toBeDefined();
                    });
                });
            });
        });

        describe('when formats of the axis values are set', () => {
            it('should have correct x-axis values format', () => {
                const format = '$';
                const previous = scatterPlot.xAxisFormat();
                const expected = '$100';

                scatterPlot.xAxisFormat(format);
                containerFixture.datum(dataset).call(scatterPlot);

                const actual = containerFixture
                    .select('svg')
                    .selectAll('.x-axis-group .tick text')
                    .text();

                expect(previous).not.toEqual(actual);
                expect(actual).toEqual(expected);
            });

            it('should have correct y-axis values format', () => {
                const format = '$';
                const previous = scatterPlot.yAxisFormat();
                const expected = '$50';

                scatterPlot.yAxisFormat(format);
                containerFixture.datum(dataset).call(scatterPlot);

                const actual = containerFixture
                    .select('svg')
                    .selectAll('.y-axis-group .tick:nth-child(3) text')
                    .text();

                expect(previous).not.toBe(actual);
                expect(actual).toBe(expected);
            });
        });

        describe('when axis labels are set', () => {
            let scatterPlot, dataset, containerFixture;

            beforeEach(() => {
                const fixture =
                    '<div id="fixture"><div class="test-container"></div></div>';

                // adds an html fixture to the DOM
                document.body.insertAdjacentHTML('afterbegin', fixture);

                dataset = buildDataSet('withOneSource');
                scatterPlot = chart()
                    .xAxisLabel('Hello World')
                    .yAxisLabel('Goodbye World');

                containerFixture = d3.select('.test-container');
                containerFixture.datum(dataset).call(scatterPlot);
            });

            // remove the html fixture from the DOM
            afterEach(() => {
                document.body.removeChild(document.getElementById('fixture'));
            });

            describe('when x-axis label and offset are set', () => {
                it('should render the x axis label', () => {
                    const expected = 1;
                    const actual = containerFixture
                        .select('svg')
                        .selectAll('.axis-labels-group .x-axis-label-text')
                        .size();

                    expect(actual).toBe(expected);
                });

                it('label should have correct string', () => {
                    const expected = 'Hello World';
                    const actual = containerFixture
                        .select('svg')
                        .selectAll('.axis-labels-group .x-axis-label-text')
                        .text();

                    expect(actual).toBe(expected);
                });
            });

            describe('when y-axis label and offset are set', () => {
                it('should render the x axis label', () => {
                    const expected = 1;
                    const actual = containerFixture
                        .select('svg')
                        .selectAll('.axis-labels-group .y-axis-label-text')
                        .size();

                    expect(actual).toBe(expected);
                });

                it('label should have correct string', () => {
                    const expected = 'Goodbye World';
                    const actual = containerFixture
                        .select('svg')
                        .selectAll('.axis-labels-group .y-axis-label-text')
                        .text();

                    expect(actual).toBe(expected);
                });
            });

            describe('xTicks and yTicks', () => {
                it('should change xTicks value if given', () => {
                    const xTicks = 5;
                    const expected = 4;

                    const previous = containerFixture
                        .selectAll('.x-axis-group .tick')
                        .size();

                    scatterPlot.xTicks(xTicks);
                    containerFixture.datum(dataset).call(scatterPlot);

                    const next = containerFixture
                        .selectAll('.x-axis-group .tick')
                        .size();

                    expect(previous).not.toBe(next);
                    expect(next).toBe(expected);
                });

                it('should change yTicks value if given', () => {
                    const yTicks = 25;
                    const expected = 33;

                    const previous = containerFixture
                        .selectAll('.y-axis-group .tick')
                        .size();

                    scatterPlot.yTicks(yTicks);
                    containerFixture.datum(dataset).call(scatterPlot);

                    const next = containerFixture
                        .selectAll('.y-axis-group .tick')
                        .size();

                    expect(previous).not.toBe(next);
                    expect(next).toBe(expected);
                });
            });
        });

        describe('when has a colorMap', () => {
            const colorMap = {
                radiating: 'green',
                reflecting: 'blue',
                blazing: 'black',
                vivid: 'yellow',
            };

            beforeEach(() => {
                const fixture =
                    '<div id="fixture"><div class="test-container"></div></div>';

                // adds an html fixture to the DOM
                document.body.insertAdjacentHTML('afterbegin', fixture);

                dataset = buildDataSet('withFourNames');
                scatterPlot = chart().colorMap(colorMap);

                containerFixture = d3.select('.test-container');
                containerFixture.datum(dataset).call(scatterPlot);
            });

            // remove the html fixture from the DOM
            afterEach(() => {
                document.body.removeChild(document.getElementById('fixture'));
            });

            it('should add the proper color to each stack', () => {
                const circles = containerFixture
                    .selectAll('.chart-group circle')
                    .nodes();

                circles.forEach((d) => {
                    expect(d.getAttribute('fill')).toEqual(
                        colorMap[d.__data__.name]
                    );
                });
            });
        });
    });

    describe('API', () => {
        it('should provide animationDuration getter and setter', () => {
            let defaultAnimationDuration = scatterPlot.animationDuration(),
                testAnimationDuration = 2000,
                newAnimationDuration;

            scatterPlot.animationDuration(testAnimationDuration);
            newAnimationDuration = scatterPlot.animationDuration();

            expect(defaultAnimationDuration).not.toBe(testAnimationDuration);
            expect(newAnimationDuration).toBe(testAnimationDuration);
        });

        it('should provide colorMap getter and setter', () => {
            let previous = scatterPlot.colorMap(),
                expected = {
                    testName: 'red',
                    testName2: 'black',
                },
                actual;

            scatterPlot.colorMap(expected);
            actual = scatterPlot.colorMap();

            expect(previous).not.toBe(expected);
            expect(actual).toBe(expected);
        });

        it('should provide a colorSchema getter and setter', () => {
            let previous = scatterPlot.colorSchema(),
                expected = ['#ffffff', '#fafefc', '#000000'],
                actual;

            scatterPlot.colorSchema(expected);
            actual = scatterPlot.colorSchema();

            expect(previous).not.toBe(expected);
            expect(actual).toBe(expected);
        });

        it('should provide a circleOpacity getter and setter', () => {
            let previous = scatterPlot.circleOpacity(),
                expected = 0.33,
                actual;

            scatterPlot.circleOpacity(expected);
            actual = scatterPlot.circleOpacity();

            expect(previous).not.toBe(expected);
            expect(actual).toBe(expected);
        });

        it('should provide a circleStrokeOpacity getter and setter', () => {
            let previous = scatterPlot.circleStrokeOpacity(),
                expected = 0.33,
                actual;

            scatterPlot.circleStrokeOpacity(expected);
            actual = scatterPlot.circleStrokeOpacity();

            expect(previous).not.toBe(expected);
            expect(actual).toBe(expected);
        });

        it('should provide a circleStrokeWidth getter and setter', () => {
            let previous = scatterPlot.circleStrokeWidth(),
                expected = 2,
                actual;

            scatterPlot.circleStrokeWidth(expected);
            actual = scatterPlot.circleStrokeWidth();

            expect(previous).not.toBe(expected);
            expect(actual).toBe(expected);
        });

        it('should provide enableZoom getter and setter', () => {
            let previous = scatterPlot.enableZoom(),
                expected = true,
                actual;

            scatterPlot.enableZoom(expected);
            actual = scatterPlot.enableZoom();

            expect(previous).not.toBe(expected);
            expect(actual).toBe(expected);
        });

        it('should provide grid getter and setter', () => {
            let previous = scatterPlot.grid(),
                expected = 'vertical',
                actual;

            scatterPlot.grid(expected);
            actual = scatterPlot.grid();

            expect(previous).not.toBe(expected);
            expect(actual).toBe(expected);
        });

        it('should provide hasHollowCircles getter and setter', () => {
            let previous = scatterPlot.hasHollowCircles(),
                expected = true,
                actual;

            scatterPlot.hasHollowCircles(expected);
            actual = scatterPlot.hasHollowCircles();

            expect(previous).not.toBe(expected);
            expect(actual).toEqual(expected);
        });

        it('should provide hasCrossHairs getter and setter', () => {
            let previous = scatterPlot.hasCrossHairs(),
                expected = true,
                actual;

            scatterPlot.hasCrossHairs(expected);
            actual = scatterPlot.hasCrossHairs();

            expect(previous).not.toBe(expected);
            expect(actual).toBe(expected);
        });

        it('should provide hasTrendline getter and setter', () => {
            let previous = scatterPlot.hasTrendline(),
                expected = true,
                actual;

            scatterPlot.hasTrendline(expected);
            actual = scatterPlot.hasTrendline();

            expect(previous).not.toBe(expected);
            expect(actual).toBe(expected);
        });

        it('should provide height getter and setter', () => {
            let previous = scatterPlot.height(),
                expected = 200,
                actual;

            scatterPlot.height(expected);
            actual = scatterPlot.height();

            expect(previous).not.toBe(expected);
            expect(actual).toBe(expected);
        });

        it('should provide highlightTextLegendOffset getter and setter', () => {
            let previous = scatterPlot.highlightTextLegendOffset(),
                expected = -55,
                actual;

            scatterPlot.highlightTextLegendOffset(expected);
            actual = scatterPlot.highlightTextLegendOffset();

            expect(previous).not.toBe(expected);
            expect(actual).toBe(expected);
        });

        it('should provide isAnimated getter and setter', () => {
            let previous = scatterPlot.isAnimated(),
                expected = true,
                actual;

            scatterPlot.isAnimated(expected);
            actual = scatterPlot.isAnimated();

            expect(previous).not.toBe(expected);
            expect(actual).toEqual(expected);
        });

        it('should provide margin getter and setter', () => {
            let previous = scatterPlot.margin(),
                expected = { top: 4, right: 4, bottom: 4, left: 4 },
                actual;

            scatterPlot.margin(expected);
            actual = scatterPlot.margin();

            expect(previous).not.toBe(expected);
            expect(actual).toEqual(expected);
        });

        describe('when margins are set partially', function () {
            it('should override the default values', () => {
                let previous = scatterPlot.margin(),
                    expected = {
                        ...previous,
                        top: 10,
                        right: 20,
                    },
                    actual;

                scatterPlot.margin(expected);
                actual = scatterPlot.margin();

                expect(previous).not.toBe(actual);
                expect(actual).toEqual(expected);
            });
        });

        it('should provide maxCircleArea getter and setter', () => {
            let previous = scatterPlot.maxCircleArea(),
                expected = 25,
                actual;

            scatterPlot.maxCircleArea(expected);
            actual = scatterPlot.maxCircleArea();

            expect(previous).not.toBe(expected);
            expect(actual).toEqual(expected);
        });

        it('should provide valueLocale getter and setter', () => {
            let defaultLocale = false,
                testLocale = {
                    thousands: '.',
                    grouping: [3],
                    currency: ['$', ''],
                    decimal: '.',
                },
                newLocale;

            scatterPlot.valueLocale(testLocale);
            newLocale = scatterPlot.valueLocale();

            expect(defaultLocale).not.toBe(newLocale);
            expect(newLocale).toBe(testLocale);
        });

        it('should provide xAxisLabel getter and setter', () => {
            let previous = scatterPlot.xAxisLabel(),
                expected = 'Great chart',
                actual;

            scatterPlot.xAxisLabel(expected);
            actual = scatterPlot.xAxisLabel();

            expect(previous).not.toBe(expected);
            expect(actual).toBe(expected);
        });

        it('should provide xAxisFormat getter and setter', () => {
            let previous = scatterPlot.xAxisFormat(),
                expected = '$',
                actual;

            scatterPlot.xAxisFormat(expected);
            actual = scatterPlot.xAxisFormat();

            expect(previous).not.toBe(expected);
            expect(actual).toBe(expected);
        });

        it('should provide xAxisFormatType getter and setter', () => {
            let previous = scatterPlot.xAxisFormatType(),
                expected = 'time',
                actual;

            scatterPlot.xAxisFormatType(expected);
            actual = scatterPlot.xAxisFormatType();

            expect(previous).not.toBe(expected);
            expect(actual).toBe(expected);
        });

        it('should provide xAxisLabelOffset getter and setter', () => {
            let previous = scatterPlot.xAxisLabelOffset(),
                expected = 40,
                actual;

            scatterPlot.xAxisLabelOffset(expected);
            actual = scatterPlot.xAxisLabelOffset();

            expect(previous).not.toBe(expected);
            expect(actual).toBe(expected);
        });

        it('should provide xTicks getter and setter', () => {
            let previous = scatterPlot.xTicks(),
                expected = 48,
                actual;

            scatterPlot.xTicks(expected);
            actual = scatterPlot.xTicks();

            expect(previous).not.toBe(expected);
            expect(actual).toBe(expected);
        });

        it('should provide yAxisLabel getter and setter', () => {
            let previous = scatterPlot.yAxisLabel(),
                expected = 'Ticket Sales',
                actual;

            scatterPlot.yAxisLabel(expected);
            actual = scatterPlot.yAxisLabel();

            expect(previous).not.toBe(expected);
            expect(actual).toBe(expected);
        });

        it('should provide yAxisFormat getter and setter', () => {
            let previous = scatterPlot.yAxisFormat(),
                expected = '$',
                actual;

            scatterPlot.yAxisFormat(expected);
            actual = scatterPlot.yAxisFormat();

            expect(previous).not.toBe(expected);
            expect(actual).toBe(expected);
        });

        it('should provide yAxisLabelOffset getter and setter', () => {
            let previous = scatterPlot.yAxisLabelOffset(-55),
                expected = 'Ticket Sales',
                actual;

            scatterPlot.yAxisLabelOffset(expected);
            actual = scatterPlot.yAxisLabelOffset();

            expect(previous).not.toBe(expected);
            expect(actual).toBe(expected);
        });

        it('should provide yTicks getter and setter', () => {
            let previous = scatterPlot.yTicks(),
                expected = 48,
                actual;

            scatterPlot.yTicks(expected);
            actual = scatterPlot.yTicks();

            expect(previous).not.toBe(expected);
            expect(actual).toBe(expected);
        });

        it('should provide width getter and setter', () => {
            let previous = scatterPlot.width(),
                expected = 200,
                actual;

            scatterPlot.width(expected);
            actual = scatterPlot.width();

            expect(previous).not.toBe(expected);
            expect(actual).toBe(expected);
        });
    });

    describe('Lifecycle', () => {
        describe('when clicking on a point', function () {
            it('should trigger a callback on mouse click', () => {
                const callbackSpy = jest.fn();
                const scatterDataPoint = containerFixture.select('svg');
                const expectedCallCount = 1;
                const expectedArguments = 3;

                scatterPlot.on('customClick', callbackSpy);
                scatterDataPoint.dispatch('click');

                expect(callbackSpy.mock.calls.length).toEqual(
                    expectedCallCount
                );
                expect(callbackSpy.mock.calls[0].length).toEqual(
                    expectedArguments
                );
            });
        });

        describe('mouse events', () => {
            it('should dispatch customMouseOver event', () => {
                const callback = jest.fn();
                const container = containerFixture.selectAll('svg');
                const expectedCallCount = 1;
                const expectedArguments = 2;

                scatterPlot.on('customMouseOver', callback);
                container.dispatch('mouseover');

                expect(callback.mock.calls.length).toEqual(expectedCallCount);
                expect(callback.mock.calls[0].length).toEqual(
                    expectedArguments
                );
            });

            it('should dispatch customMouseOut event', () => {
                const callback = jest.fn();
                const container = containerFixture.selectAll('svg');
                const expectedCallCount = 1;
                const expectedArguments = 2;

                scatterPlot.on('customMouseOut', callback);
                container.dispatch('mouseout');

                expect(callback.mock.calls.length).toEqual(expectedCallCount);
                expect(callback.mock.calls[0].length).toEqual(
                    expectedArguments
                );
            });

            it('should dispatch customMouseMove event', () => {
                const callback = jest.fn();
                const container = containerFixture.selectAll('svg');
                const expectedCallCount = 1;
                const expectedArguments = 3;

                scatterPlot.on('customMouseMove', callback);
                container.dispatch('mousemove');

                expect(callback.mock.calls.length).toEqual(expectedCallCount);
                expect(callback.mock.calls[0].length).toEqual(
                    expectedArguments
                );
            });
        });
    });
});
