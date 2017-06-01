/*
 * File: app/view/person/Details.js
 *
 * This file was generated by Sencha Architect
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.5.x Modern library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.5.x Modern. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('PWA.view.person.Details', {
    extend: 'Ext.Panel',
    alias: 'widget.person.details',

    requires: [
        'PWA.view.person.DetailsViewModel',
        'Ext.XTemplate'
    ],

    viewModel: {
        type: 'person.details'
    },
    cls: 'person-details',
    tpl: [
        '  <div class="block-section">',
        '            <div class="item">',
        '                <div class="label">Username</div>',
        '                <div class="value">{username}</div>',
        '            </div>',
        '            <tpl if="phone">',
        '                <div class="item">',
        '                    <div class="label">Phone</div>',
        '                    <div class="value">{phone}</div>',
        '                </div>',
        '            </tpl>',
        '            <tpl if="extension">',
        '                <div class="item">',
        '                    <div class="label">Extension</div>',
        '                    <div class="value">{extension}</div>',
        '                </div>',
        '            </tpl>',
        '        </div>',
        '        <div class="block-section">',
        '            <div class="item">',
        '                <div class="label">Email</div>',
        '                <div class="value">{email}</div>',
        '            </div>',
        '            <tpl if="skype">',
        '                <div class="item">',
        '                    <div class="label">Skype</div>',
        '                    <div class="value">{skype}</div>',
        '                </div>',
        '            </tpl>',
        '            <tpl if="linkedin">',
        '                <div class="item">',
        '                    <div class="label">LinkedIn</div>',
        '                    <div class="value">{linkedin}</div>',
        '                </div>',
        '            </tpl>',
        '        </div>',
        '        <div class="block-section">',
        '            <div class="item">',
        '                <div class="label">Birthday</div>',
        '                <div class="value">{birthday:date("F jS Y")}</div>',
        '                <div class="extra">({birthday:dateDiff(new Date())})</div>',
        '            </div>',
        '            <div class="item">',
        '                <div class="label">Entry Date</div>',
        '                <div class="value">{started:date("F jS Y")}</div>',
        '                <tpl if="!ended">',
        '                    <div class="extra">({started:dateDiff(new Date())})</div>',
        '                </tpl>',
        '            </div>',
        '            <tpl if="ended">',
        '                <div class="item">',
        '                    <div class="label">Exit Date</div>',
        '                    <div class="value">{ended:date("F jS Y")}</div>',
        '                    <div class="extra">({started:dateDiff(values.ended)})</div>',
        '                </div>',
        '            </tpl>',
        '        </div>'
    ],
    title: 'Details'

});