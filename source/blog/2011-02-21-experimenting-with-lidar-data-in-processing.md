---
title: Experimenting with Lidar data in Processing
date: 2011/02/21
published: false
---

experimenting with lidar arduino data, visualized as an animation

SPLIT\_SUMMARY\_BEFORE\_THIS


## lidar_polar_graph.pde:



<pre><code class="java">/**
* lidar_polar_graph.pde
*
* experimenting with lidar arduino data, visualized as an animation
*
* @author James M. Stone (jamesmanofstone@gmail.com)
*
* @date 21-Feb-2011
*
* Table.pde from Visualizing Data by Ben Fry
*
**/

int i = 0;
    int myCol = 0;
    Table dataTable;

    void setup() {
    size(600, 300); // for screen graphics
    dataTable = new Table("data/all_readings.txt");
    noStroke();
    background(0);
    fill(0);
    smooth();
    }

    void draw() {
    translate(height, width/2); // start graph at bottom of sketch

    // conv from polar to cart.
    float theta = dataTable.getFloat(i, 0) + (float)Math.PI;
    float r = dataTable.getFloat(i, 1);
    float x = r * cos(theta);
    float y = r * sin(theta);
    fill(255-r, 100 - myCol, 100, 50);
    ellipse(x, y, r/10, r/10);
    if (i % 180 == 0) {
    myCol += 10;
    }
    i++;
    if (i >= dataTable.getRowCount()) {
    i = 0;
    myCol = 0;
    background(random(50), random(50), random(50));
    }
    delay(10);
    }</code></pre>


## Table.pde


From Ben Fry's excellent book, visualizing data. Basically opens the tsv data file and puts it into an object that is easy to navigate.



<pre><code class="java">class Table {
    int rowCount;
    String[][] data;

    Table(String filename) {
    String[] rows = loadStrings(filename);
    data = new String[rows.length][];

    for (int i = 0; i < rows.length; i++) {
    if (trim(rows[i]).length() == 0) {
    continue; // skip empty rows
    }
    if (rows[i].startsWith("#")) {
    continue; // skip comment lines
    }

    // split the row on the tabs
    String[] pieces = split(rows[i], TAB);
    // copy to the table array
    data[rowCount] = pieces;
    rowCount++;

    // this could be done in one fell swoop via:
    //data[rowCount++] = split(rows[i], TAB);
    }
    // resize the 'data' array as necessary
    data = (String[][]) subset(data, 0, rowCount);
    }

    int getRowCount() {
    return rowCount;
    }

    // find a row by its name, returns -1 if no row found
    int getRowIndex(String name) {
    for (int i = 0; i < rowCount; i++) {
    if (data[i][0].equals(name)) {
    return i;
    }
    }
    println("No row named '" + name + "' was found");
    return -1;
    }

    String getRowName(int row) {
    return getString(row, 0);
    }

    String getString(int rowIndex, int column) {
    return data[rowIndex][column];
    }

    String getString(String rowName, int column) {
    return getString(getRowIndex(rowName), column);
    }

    int getInt(String rowName, int column) {
    return parseInt(getString(rowName, column));
    }

    int getInt(int rowIndex, int column) {
    return parseInt(getString(rowIndex, column));
    }

    float getFloat(String rowName, int column) {
    return parseFloat(getString(rowName, column));
    }

    float getFloat(int rowIndex, int column) {
    return parseFloat(getString(rowIndex, column));
    }

    void setRowName(int row, String what) {
    data[row][0] = what;
    }

    void setString(int rowIndex, int column, String what) {
    data[rowIndex][column] = what;
    }

    void setString(String rowName, int column, String what) {
    int rowIndex = getRowIndex(rowName);
    data[rowIndex][column] = what;
    }

    void setInt(int rowIndex, int column, int what) {
    data[rowIndex][column] = str(what);
    }

    void setInt(String rowName, int column, int what) {
    int rowIndex = getRowIndex(rowName);
    data[rowIndex][column] = str(what);
    }

    void setFloat(int rowIndex, int column, float what) {
    data[rowIndex][column] = str(what);
    }

    void setFloat(String rowName, int column, float what) {
    int rowIndex = getRowIndex(rowName);
    data[rowIndex][column] = str(what);
    }
    }</code></pre>




## all_readings.txt


I used a ir sensor outfitted to a servo through a arduino to generate this data through the serial port.

<pre><code>0.0000000000 29
    0.0174532914 28
    0.0349065828 34
    0.0523598766 90
    0.0698131656 70
    0.0872664546 121
    0.1047197580 114
    0.1221730470 144
    0.1396263360 256
    0.1570796394 479
    0.1745329141 149
    0.1919862174 50
    0.2094395160 33
    0.2268928050 29
    0.2443460941 26
    0.2617993831 27
    0.2792526721 28
    0.2967059612 29
    0.3141592741 29
    0.3316125631 30
    0.3490658283 30
    0.3665191650 31
    0.3839724349 31
    0.4014257431 32
    0.4188790321 33
    0.4363323211 33
    0.4537856101 34
    0.4712388992 34
    0.4886921882 36
    0.5061454772 38
    0.5235987663 39
    0.5410520553 38
    0.5585053443 38
    0.5759586811 37
    0.5934119224 37
    0.6108652114 36
    0.6283185482 35
    0.6457717895 33
    0.6632251262 32
    0.6806784152 31
    0.6981316566 30
    0.7155849933 30
    0.7330383300 30
    0.7504915714 29
    0.7679448604 29
    0.7853981971 29
    0.8028514862 29
    0.8203047752 29
    0.8377580642 28
    0.8552113533 28
    0.8726646423 28
    0.8901178359 28
    0.9075712203 28
    0.9250245094 29
    0.9424777984 28
    0.9599310874 28
    0.9773843765 28
    0.9948376655 28
    1.0122909545 28
    1.0297442674 28
    1.0471975803 28
    1.0646508932 28
    1.0821040916 29
    1.0995573997 29
    1.1170107126 29
    1.1344640254 29
    1.1519173383 29
    1.1693705320 29
    1.1868238449 30
    1.2042771577 30
    1.2217304706 30
    1.2391837835 30
    1.2566370964 30
    1.2740902900 31
    1.2915435981 31
    1.3089969158 31
    1.3264502286 31
    1.3439035415 31
    1.3613568544 32
    1.3788100481 33
    1.3962633609 34
    1.4137166976 36
    1.4311699867 31
    1.4486232757 22
    1.4660766124 21
    1.4835298061 21
    1.5009831428 21
    1.5184364318 21
    1.5358897209 21
    1.5533430576 21
    1.5707963943 21
    1.5882495880 22
    1.6057028770 22
    1.6231561660 23
    1.6406095027 25
    1.6580628395 30
    1.6755161285 51
    1.6929693222 68
    1.7104226112 69
    1.7278759479 61
    1.7453292846 85
    1.7627825736 144
    1.7802357673 94
    1.7976890563 137
    1.8151424407 185
    1.8325957298 224
    1.8500490188 203
    1.8675023078 192
    1.8849555015 193
    1.9024087905 182
    1.9198621749 178
    1.9373154640 172
    1.9547687530 89
    1.9722221374 25
    1.9896753311 20
    2.0071287155 20
    2.0245819091 20
    2.0420351028 20
    2.0594885349 20
    2.0769417285 21
    2.0943951606 21
    2.1118483543 21
    2.1293017864 21
    2.1467549800 22
    2.1642081737 22
    2.1816616058 24
    2.1991147994 30
    2.2165682315 60
    2.2340214252 154
    2.2514746189 259
    2.2689280509 993
    2.2863812446 819
    2.3038346767 230
    2.3212878704 151
    2.3387410640 80
    2.3561944961 62
    2.3736476898 37
    2.3911011219 36
    2.4085543155 39
    2.4260077476 36
    2.4434609413 42
    2.4609141349 48
    2.4783675670 46
    2.4958207607 52
    2.5132741928 58
    2.5307273864 44
    2.5481805801 31
    2.5656340122 32
    2.5830872058 36
    2.6005406379 37
    2.6179938316 38
    2.6354472637 38
    2.6529004573 38
    2.6703536510 38
    2.6878070831 38
    2.7052602767 38
    2.7227137088 38
    2.7401669025 38
    2.7576200962 39
    2.7750735282 47
    2.7925267219 62
    2.8099802017 80
    2.8274333953 49
    2.8448865890 44
    2.8623399734 44
    2.8797931671 43
    2.8972465515 42
    2.9146997451 43
    2.9321532249 45
    2.9496064186 47
    2.9670596122 49
    2.9845130920 50
    3.0019662380 50
    3.0194196701 50
    3.0368728637 49
    3.0543260574 48
    3.0717794895 50
    3.0892326831 49
    3.1066861152 49
    3.1241393089 49
    3.1415927410 49
    0.0000000000 48
    0.0174532914 51
    0.0349065828 36
    0.0523598766 45
    0.0698131656 105
    0.0872664546 28
    0.1047197580 28
    0.1221730470 32
    0.1396263360 213
    0.1570796394 516
    0.1745329141 134
    0.1919862174 48
    0.2094395160 37
    0.2268928050 28
    0.2443460941 26
    0.2617993831 27
    0.2792526721 28
    0.2967059612 29
    0.3141592741 29
    0.3316125631 30
    0.3490658283 30
    0.3665191650 31
    0.3839724349 31
    0.4014257431 32
    0.4188790321 33
    0.4363323211 34
    0.4537856101 34
    0.4712388992 35
    0.4886921882 36
    0.5061454772 38
    0.5235987663 39
    0.5410520553 38
    0.5585053443 38
    0.5759586811 38
    0.5934119224 38
    0.6108652114 36
    0.6283185482 34
    0.6457717895 33
    0.6632251262 32
    0.6806784152 31
    0.6981316566 30
    0.7155849933 30
    0.7330383300 30
    0.7504915714 29
    0.7679448604 29
    0.7853981971 29
    0.8028514862 29
    0.8203047752 29
    0.8377580642 29
    0.8552113533 28
    0.8726646423 28
    0.8901178359 28
    0.9075712203 28
    0.9250245094 29
    0.9424777984 28
    0.9599310874 28
    0.9773843765 28
    0.9948376655 28
    1.0122909545 28
    1.0297442674 28
    1.0471975803 28
    1.0646508932 28
    1.0821040916 29
    1.0995573997 29
    1.1170107126 29
    1.1344640254 29
    1.1519173383 29
    1.1693705320 29
    1.1868238449 30
    1.2042771577 30
    1.2217304706 30
    1.2391837835 30
    1.2566370964 30
    1.2740902900 31
    1.2915435981 31
    1.3089969158 31
    1.3264502286 31
    1.3439035415 31
    1.3613568544 32
    1.3788100481 33
    1.3962633609 34
    1.4137166976 36
    1.4311699867 30
    1.4486232757 22
    1.4660766124 21
    1.4835298061 21
    1.5009831428 21
    1.5184364318 21
    1.5358897209 21
    1.5533430576 21
    1.5707963943 21
    1.5882495880 22
    1.6057028770 22
    1.6231561660 23
    1.6406095027 25
    1.6580628395 31
    1.6755161285 51
    1.6929693222 64
    1.7104226112 67
    1.7278759479 61
    1.7453292846 79
    1.7627825736 146
    1.7802357673 97
    1.7976890563 139
    1.8151424407 183
    1.8325957298 223
    1.8500490188 215
    1.8675023078 202
    1.8849555015 193
    1.9024087905 182
    1.9198621749 179
    1.9373154640 156
    1.9547687530 91
    1.9722221374 28
    1.9896753311 20
    2.0071287155 20
    2.0245819091 20
    2.0420351028 20
    2.0594885349 21
    2.0769417285 21
    2.0943951606 21
    2.1118483543 21
    2.1293017864 22
    2.1467549800 22
    2.1642081737 22
    2.1816616058 24
    2.1991147994 30
    2.2165682315 56
    2.2340214252 140
    2.2514746189 460
    2.2689280509 768
    2.2863812446 0
    2.3038346767 396
    2.3212878704 136
    2.3387410640 88
    2.3561944961 56
    2.3736476898 39
    2.3911011219 36
    2.4085543155 38
    2.4260077476 36
    2.4434609413 42
    2.4609141349 48
    2.4783675670 45
    2.4958207607 53
    2.5132741928 59
    2.5307273864 44
    2.5481805801 31
    2.5656340122 33
    2.5830872058 36
    2.6005406379 38
    2.6179938316 38
    2.6354472637 38
    2.6529004573 38
    2.6703536510 38
    2.6878070831 38
    2.7052602767 38
    2.7227137088 38
    2.7401669025 39
    2.7576200962 39
    2.7750735282 45
    2.7925267219 59
    2.8099802017 80
    2.8274333953 50
    2.8448865890 44
    2.8623399734 43
    2.8797931671 43
    2.8972465515 42
    2.9146997451 43
    2.9321532249 45
    2.9496064186 47
    2.9670596122 49
    2.9845130920 50
    3.0019662380 50
    3.0194196701 49
    3.0368728637 49
    3.0543260574 48
    3.0717794895 50
    3.0892326831 49
    3.1066861152 49
    3.1241393089 49
    3.1415927410 49
    0.0000000000 48
    0.0174532914 50
    0.0349065828 38
    0.0523598766 38
    0.0698131656 108
    0.0872664546 28
    0.1047197580 28
    0.1221730470 34
    0.1396263360 223
    0.1570796394 508
    0.1745329141 122
    0.1919862174 55
    0.2094395160 34
    0.2268928050 28
    0.2443460941 26
    0.2617993831 27
    0.2792526721 28
    0.2967059612 28
    0.3141592741 29
    0.3316125631 30
    0.3490658283 30
    0.3665191650 30
    0.3839724349 31
    0.4014257431 32
    0.4188790321 33
    0.4363323211 34
    0.4537856101 34
    0.4712388992 35
    0.4886921882 36
    0.5061454772 39
    0.5235987663 39
    0.5410520553 38
    0.5585053443 38
    0.5759586811 37
    0.5934119224 37
    0.6108652114 36
    0.6283185482 34
    0.6457717895 33
    0.6632251262 32
    0.6806784152 31
    0.6981316566 30
    0.7155849933 30
    0.7330383300 30
    0.7504915714 29
    0.7679448604 29
    0.7853981971 29
    0.8028514862 29
    0.8203047752 29
    0.8377580642 28
    0.8552113533 28
    0.8726646423 28
    0.8901178359 28
    0.9075712203 28
    0.9250245094 29
    0.9424777984 28
    0.9599310874 28
    0.9773843765 28
    0.9948376655 28
    1.0122909545 28
    1.0297442674 28
    1.0471975803 28
    1.0646508932 28
    1.0821040916 29
    1.0995573997 29
    1.1170107126 29
    1.1344640254 29
    1.1519173383 29
    1.1693705320 29
    1.1868238449 30
    1.2042771577 30
    1.2217304706 30
    1.2391837835 30
    1.2566370964 30
    1.2740902900 31
    1.2915435981 31
    1.3089969158 31
    1.3264502286 31
    1.3439035415 31
    1.3613568544 32
    1.3788100481 33
    1.3962633609 35
    1.4137166976 36
    1.4311699867 30
    1.4486232757 23
    1.4660766124 21
    1.4835298061 21
    1.5009831428 21
    1.5184364318 21
    1.5358897209 21
    1.5533430576 21
    1.5707963943 21
    1.5882495880 22
    1.6057028770 22
    1.6231561660 23
    1.6406095027 25
    1.6580628395 31
    1.6755161285 52
    1.6929693222 65
    1.7104226112 68
    1.7278759479 61
    1.7453292846 83
    1.7627825736 148
    1.7802357673 96
    1.7976890563 134
    1.8151424407 185
    1.8325957298 232
    1.8500490188 209
    1.8675023078 193
    1.8849555015 188
    1.9024087905 182
    1.9198621749 179
    1.9373154640 158
    1.9547687530 79
    1.9722221374 26
    1.9896753311 21
    2.0071287155 20
    2.0245819091 20
    2.0420351028 20
    2.0594885349 21
    2.0769417285 21
    2.0943951606 21
    2.1118483543 21
    2.1293017864 21
    2.1467549800 22
    2.1642081737 22
    2.1816616058 24
    2.1991147994 30
    2.2165682315 60
    2.2340214252 156
    2.2514746189 295
    2.2689280509 832
    2.2863812446 0
    2.3038346767 343
    2.3212878704 159
    2.3387410640 80
    2.3561944961 62
    2.3736476898 37
    2.3911011219 36
    2.4085543155 38
    2.4260077476 36
    2.4434609413 42
    2.4609141349 47
    2.4783675670 45
    2.4958207607 54
    2.5132741928 60
    2.5307273864 45
    2.5481805801 29
    2.5656340122 32
    2.5830872058 36
    2.6005406379 38
    2.6179938316 38
    2.6354472637 38
    2.6529004573 38
    2.6703536510 38
    2.6878070831 38
    2.7052602767 38
    2.7227137088 38
    2.7401669025 39
    2.7576200962 40
    2.7750735282 45
    2.7925267219 60
    2.8099802017 79
    2.8274333953 48
    2.8448865890 44
    2.8623399734 44
    2.8797931671 43
    2.8972465515 42
    2.9146997451 44
    2.9321532249 45
    2.9496064186 47
    2.9670596122 49
    2.9845130920 50
    3.0019662380 50
    3.0194196701 50
    3.0368728637 49
    3.0543260574 48
    3.0717794895 50
    3.0892326831 49
    3.1066861152 49
    3.1241393089 49
    3.1415927410 48
    0.0000000000 49
    0.0174532914 50
    0.0349065828 40
    0.0523598766 34
    0.0698131656 90
    0.0872664546 29
    0.1047197580 28
    0.1221730470 33
    0.1396263360 222
    0.1570796394 528
    0.1745329141 133
    0.1919862174 57
    0.2094395160 34
    0.2268928050 28
    0.2443460941 26
    0.2617993831 27
    0.2792526721 28
    0.2967059612 29
    0.3141592741 29
    0.3316125631 30
    0.3490658283 30
    0.3665191650 31
    0.3839724349 31
    0.4014257431 32
    0.4188790321 33
    0.4363323211 33
    0.4537856101 34
    0.4712388992 35
    0.4886921882 36
    0.5061454772 39
    0.5235987663 39
    0.5410520553 38
    0.5585053443 38
    0.5759586811 37
    0.5934119224 37
    0.6108652114 35
    0.6283185482 34
    0.6457717895 33
    0.6632251262 32
    0.6806784152 31
    0.6981316566 30
    0.7155849933 30
    0.7330383300 29
    0.7504915714 29
    0.7679448604 29
    0.7853981971 29
    0.8028514862 29
    0.8203047752 29
    0.8377580642 29
    0.8552113533 28
    0.8726646423 28
    0.8901178359 28
    0.9075712203 28
    0.9250245094 29
    0.9424777984 28
    0.9599310874 28
    0.9773843765 28
    0.9948376655 28
    1.0122909545 28
    1.0297442674 28
    1.0471975803 28
    1.0646508932 28
    1.0821040916 29
    1.0995573997 29
    1.1170107126 29
    1.1344640254 29
    1.1519173383 29
    1.1693705320 29
    1.1868238449 30
    1.2042771577 30
    1.2217304706 30
    1.2391837835 30
    1.2566370964 30
    1.2740902900 30
    1.2915435981 31
    1.3089969158 31
    1.3264502286 31
    1.3439035415 31
    1.3613568544 32
    1.3788100481 33
    1.3962633609 35
    1.4137166976 37
    1.4311699867 30
    1.4486232757 22
    1.4660766124 21
    1.4835298061 21
    1.5009831428 21
    1.5184364318 21
    1.5358897209 21
    1.5533430576 21
    1.5707963943 22
    1.5882495880 22
    1.6057028770 22
    1.6231561660 23
    1.6406095027 26
    1.6580628395 33
    1.6755161285 56
    1.6929693222 67
    1.7104226112 71
    1.7278759479 62
    1.7453292846 71
    1.7627825736 132
    1.7802357673 98
    1.7976890563 132
    1.8151424407 184
    1.8325957298 223
    1.8500490188 207
    1.8675023078 190
    1.8849555015 186
    1.9024087905 182
    1.9198621749 182
    1.9373154640 165
    1.9547687530 96
    1.9722221374 32
    1.9896753311 20
    2.0071287155 20
    2.0245819091 20
    2.0420351028 20
    2.0594885349 21
    2.0769417285 21
    2.0943951606 21
    2.1118483543 21
    2.1293017864 21
    2.1467549800 22
    2.1642081737 22
    2.1816616058 24
    2.1991147994 30
    2.2165682315 72
    2.2340214252 143
    2.2514746189 349
    2.2689280509 734
    2.2863812446 848
    2.3038346767 321
    2.3212878704 131
    2.3387410640 83
    2.3561944961 59
    2.3736476898 36
    2.3911011219 37
    2.4085543155 39
    2.4260077476 37
    2.4434609413 44
    2.4609141349 47
    2.4783675670 47
    2.4958207607 51
    2.5132741928 58
    2.5307273864 47
    2.5481805801 30
    2.5656340122 32
    2.5830872058 36
    2.6005406379 38
    2.6179938316 38
    2.6354472637 38
    2.6529004573 38
    2.6703536510 38
    2.6878070831 38
    2.7052602767 38
    2.7227137088 38
    2.7401669025 38
    2.7576200962 40
    2.7750735282 45
    2.7925267219 66
    2.8099802017 89
    2.8274333953 48
    2.8448865890 44
    2.8623399734 44
    2.8797931671 43
    2.8972465515 42
    2.9146997451 44
    2.9321532249 45
    2.9496064186 47
    2.9670596122 49
    2.9845130920 50
    3.0019662380 50
    3.0194196701 50
    3.0368728637 49
    3.0543260574 48
    3.0717794895 50
    3.0892326831 50
    3.1066861152 49
    3.1241393089 49
    3.1415927410 48
    0.0000000000 48
    0.0174532914 49
    0.0349065828 39
    0.0523598766 29
    0.0698131656 71
    0.0872664546 29
    0.1047197580 28
    0.1221730470 33
    0.1396263360 245
    0.1570796394 523
    0.1745329141 146
    0.1919862174 55
    0.2094395160 35
    0.2268928050 27
    0.2443460941 26
    0.2617993831 27
    0.2792526721 28
    0.2967059612 29
    0.3141592741 29
    0.3316125631 30
    0.3490658283 30
    0.3665191650 31
    0.3839724349 31
    0.4014257431 32
    0.4188790321 33
    0.4363323211 33
    0.4537856101 34
    0.4712388992 35
    0.4886921882 36
    0.5061454772 38
    0.5235987663 39
    0.5410520553 38
    0.5585053443 38
    0.5759586811 37
    0.5934119224 37
    0.6108652114 35
    0.6283185482 34
    0.6457717895 33
    0.6632251262 32
    0.6806784152 31
    0.6981316566 30
    0.7155849933 30
    0.7330383300 30
    0.7504915714 29
    0.7679448604 29
    0.7853981971 29
    0.8028514862 29
    0.8203047752 28
    0.8377580642 29
    0.8552113533 28
    0.8726646423 28
    0.8901178359 28
    0.9075712203 28
    0.9250245094 29
    0.9424777984 28
    0.9599310874 28
    0.9773843765 28
    0.9948376655 28
    1.0122909545 28
    1.0297442674 28
    1.0471975803 28
    1.0646508932 29
    1.0821040916 29
    1.0995573997 29
    1.1170107126 29
    1.1344640254 29
    1.1519173383 29
    1.1693705320 29
    1.1868238449 30
    1.2042771577 30
    1.2217304706 30
    1.2391837835 30
    1.2566370964 30
    1.2740902900 30
    1.2915435981 31
    1.3089969158 31
    1.3264502286 31
    1.3439035415 31
    1.3613568544 32
    1.3788100481 33
    1.3962633609 34
    1.4137166976 36
    1.4311699867 27
    1.4486232757 22
    1.4660766124 21
    1.4835298061 21
    1.5009831428 21
    1.5184364318 21
    1.5358897209 21
    1.5533430576 21
    1.5707963943 22
    1.5882495880 22
    1.6057028770 22
    1.6231561660 23
    1.6406095027 24
    1.6580628395 34
    1.6755161285 50
    1.6929693222 67
    1.7104226112 70
    1.7278759479 63
    1.7453292846 72
    1.7627825736 148
    1.7802357673 98
    1.7976890563 126
    1.8151424407 185
    1.8325957298 218
    1.8500490188 216
    1.8675023078 190
    1.8849555015 186
    1.9024087905 183
    1.9198621749 182
    1.9373154640 170
    1.9547687530 93
    1.9722221374 31
    1.9896753311 20
    2.0071287155 20
    2.0245819091 20
    2.0420351028 20
    2.0594885349 21
    2.0769417285 21
    2.0943951606 21
    2.1118483543 21
    2.1293017864 21
    2.1467549800 22
    2.1642081737 22
    2.1816616058 24
    2.1991147994 30
    2.2165682315 74
    2.2340214252 142
    2.2514746189 342
    2.2689280509 714
    2.2863812446 874
    2.3038346767 327
    2.3212878704 127
    2.3387410640 83
    2.3561944961 57
    2.3736476898 38
    2.3911011219 37
    2.4085543155 39
    2.4260077476 36
    2.4434609413 42
    2.4609141349 47
    2.4783675670 47
    2.4958207607 50
    2.5132741928 60
    2.5307273864 46
    2.5481805801 30
    2.5656340122 32
    2.5830872058 36
    2.6005406379 37
    2.6179938316 38
    2.6354472637 38
    2.6529004573 38
    2.6703536510 38
    2.6878070831 38
    2.7052602767 38
    2.7227137088 38
    2.7401669025 39
    2.7576200962 40
    2.7750735282 44
    2.7925267219 62
    2.8099802017 87
    2.8274333953 51
    2.8448865890 44
    2.8623399734 44
    2.8797931671 42
    2.8972465515 42
    2.9146997451 43
    2.9321532249 45
    2.9496064186 47
    2.9670596122 49
    2.9845130920 50
    3.0019662380 50
    3.0194196701 50
    3.0368728637 48
    3.0543260574 48
    3.0717794895 50
    3.0892326831 49
    3.1066861152 49
    3.1241393089 49
    3.1415927410 48
    0.0000000000 49
    0.0174532914 49
    0.0349065828 41
    0.0523598766 30
    0.0698131656 77
    0.0872664546 29
    0.1047197580 28
    0.1221730470 33
    0.1396263360 241
    0.1570796394 541
    0.1745329141 126
    0.1919862174 60
    0.2094395160 33
    0.2268928050 27
    0.2443460941 26
    0.2617993831 27
    0.2792526721 28
    0.2967059612 29
    0.3141592741 29
    0.3316125631 29
    0.3490658283 30
    0.3665191650 30
    0.3839724349 31
    0.4014257431 32
    0.4188790321 33
    0.4363323211 34
    0.4537856101 34
    0.4712388992 35
    0.4886921882 35
    0.5061454772 39
    0.5235987663 39
    0.5410520553 38
    0.5585053443 38
    0.5759586811 37
    0.5934119224 37
    0.6108652114 35
    0.6283185482 34
    0.6457717895 33
    0.6632251262 32
    0.6806784152 31
    0.6981316566 30
    0.7155849933 30
    0.7330383300 30
    0.7504915714 29
    0.7679448604 29
    0.7853981971 29
    0.8028514862 29
    0.8203047752 28
    0.8377580642 29
    0.8552113533 28
    0.8726646423 28
    0.8901178359 28
    0.9075712203 28
    0.9250245094 28
    0.9424777984 28
    0.9599310874 28
    0.9773843765 28
    0.9948376655 28
    1.0122909545 28
    1.0297442674 28
    1.0471975803 28
    1.0646508932 29
    1.0821040916 29
    1.0995573997 29
    1.1170107126 29
    1.1344640254 29
    1.1519173383 29
    1.1693705320 29
    1.1868238449 30
    1.2042771577 30
    1.2217304706 30
    1.2391837835 30
    1.2566370964 30
    1.2740902900 30
    1.2915435981 31
    1.3089969158 31
    1.3264502286 31
    1.3439035415 31
    1.3613568544 32
    1.3788100481 33
    1.3962633609 34
    1.4137166976 36
    1.4311699867 28
    1.4486232757 22
    1.4660766124 21
    1.4835298061 21
    1.5009831428 21
    1.5184364318 21
    1.5358897209 21
    1.5533430576 21
    1.5707963943 22
    1.5882495880 22
    1.6057028770 22
    1.6231561660 23
    1.6406095027 25
    1.6580628395 35
    1.6755161285 53
    1.6929693222 69
    1.7104226112 69
    1.7278759479 62
    1.7453292846 75
    1.7627825736 151
    1.7802357673 100
    1.7976890563 136
    1.8151424407 191
    1.8325957298 234
    1.8500490188 206
    1.8675023078 191
    1.8849555015 186
    1.9024087905 183
    1.9198621749 185
    1.9373154640 161
    1.9547687530 98
    1.9722221374 27
    1.9896753311 20
    2.0071287155 20
    2.0245819091 20
    2.0420351028 20
    2.0594885349 21
    2.0769417285 21
    2.0943951606 21
    2.1118483543 21
    2.1293017864 22
    2.1467549800 22
    2.1642081737 22
    2.1816616058 24
    2.1991147994 33
    2.2165682315 62
    2.2340214252 154
    2.2514746189 381
    2.2689280509 619
    2.2863812446 891
    2.3038346767 299
    2.3212878704 132
    2.3387410640 86
    2.3561944961 59
    2.3736476898 38
    2.3911011219 36
    2.4085543155 39
    2.4260077476 36
    2.4434609413 40
    2.4609141349 45
    2.4783675670 44
    2.4958207607 55
    2.5132741928 59
    2.5307273864 42
    2.5481805801 30
    2.5656340122 32
    2.5830872058 36
    2.6005406379 37
    2.6179938316 38
    2.6354472637 38
    2.6529004573 38
    2.6703536510 38
    2.6878070831 38
    2.7052602767 38
    2.7227137088 38
    2.7401669025 38
    2.7576200962 39
    2.7750735282 46
    2.7925267219 62
    2.8099802017 85
    2.8274333953 54
    2.8448865890 44
    2.8623399734 44
    2.8797931671 43
    2.8972465515 42
    2.9146997451 43
    2.9321532249 45
    2.9496064186 47
    2.9670596122 49
    2.9845130920 50
    3.0019662380 50
    3.0194196701 50
    3.0368728637 49
    3.0543260574 48
    3.0717794895 50
    3.0892326831 49
    3.1066861152 49
    3.1241393089 49
    3.1415927410 48</code></pre>